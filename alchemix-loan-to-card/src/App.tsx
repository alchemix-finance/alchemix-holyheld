import { useState, useEffect, useMemo } from 'react';
import * as React from "react";
import { formatUnits } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient } from 'wagmi';
import { zeroAddress } from 'viem';
import { useBorrowableLimit } from './hooks/useBorrowableLimit';
import { useChain } from './hooks/useChain';
import { VAULTS } from './lib/queries/useVaults';
import { SYNTH_ASSETS_METADATA } from './lib/config/synths';
import { useHolyheldSDK } from './hooks/useHolyheld';
import logo from './assets/ALCX_Std_logo.png';
import './App.css';
import Select from 'react-select';

const App: React.FC = () => {
  const [depositAsset, setDepositAsset] = useState<string>('');
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [selectedStrategy, setSelectedStrategy] = useState<string>('');
  const [loanAsset, setLoanAsset] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [eurAmount, setEurAmount] = useState<string>('');
  const [holytag, setHolytag] = useState<string>('');
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const chain = useChain();

  const { validateHolytag, convertToEUR, performTopUp } = useHolyheldSDK();

  const availableDepositAssets = useMemo(() => {
    if (!chain.id) return [];

    const vaults = VAULTS[chain.id];
    if (!vaults) return [];

    return [...new Set(Object.values(vaults).map((vault) => vault.underlyingSymbol))];
  }, [chain.id]);

  const availableStrategies = useMemo(() => {
    if (!chain.id || !depositAsset) return [];

    const vaults = VAULTS[chain.id];
    if (!vaults) return [];

    return Object.entries(vaults)
      .filter(([_, vault]) => vault.underlyingSymbol === depositAsset)
      .map(([address, vault]) => ({
        address,
        label: vault.label,
        image: vault.image,
        yieldSymbol: vault.yieldSymbol,
      }));
  }, [chain.id, depositAsset]);

  const availableLoanAssets = useMemo(() => {
    return Object.entries(SYNTH_ASSETS_METADATA).map(([key, metadata]) => ({
      symbol: key,
      ...metadata,
    }));
  }, []);

  useEffect(() => {
    if (depositAsset && availableStrategies.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [depositAsset, availableStrategies]);

  const formattedStrategies = availableStrategies.map((strategy) => ({
    value: strategy.address,
    label: strategy.label,
  }));



  const handleValidateHolytag = async () => {
    try {
      const isValid = await validateHolytag(holytag);
      alert(isValid ? 'Holytag is valid!' : 'Holytag is not valid!');
    } catch (err) {
      console.error('Error validating holytag:', err);
      setError('Failed to validate holytag.');
    }
  };

  const handleConvertToEUR = async () => {
    if (!depositAsset || !depositAmount || !chain?.name) {
      setError('Please select an asset and enter an amount.');
      return;
    }

    try {
      const { EURAmount } = await convertToEUR(depositAsset, 18, depositAmount, chain.name);
      setEurAmount(EURAmount);
      alert(`Converted to: €${EURAmount}`);
    } catch (err) {
      console.error('Error converting to EUR:', err);
      setError('Failed to convert tokens to EUR.');
    }
  };

  const handleTopUp = async () => {
    if (!walletClient || !address || !chain?.name || !holytag || !eurAmount) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      await performTopUp(
        {}, // Placeholder for public client
        walletClient,
        address,
        depositAsset,
        chain.name,
        depositAmount,
        undefined, // Transfer data if necessary
        holytag,
        true,
        {
          onHashGenerate: (hash) => console.log('Transaction Hash:', hash),
          onStepChange: (step) => console.log('Current Step:', step),
        }
      );
      alert('Top-up successful!');
    } catch (err) {
      console.error('Error during top-up:', err);
      setError('Failed to perform top-up.');
    }
  };

  const handleInputChange = (value: string) => {
    const regex = /^[0-9]*[.]?[0-9]*$/;
    if (regex.test(value)) {
      setDepositAmount(value);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Alchemix Logo" className="logo" />
        </div>
        <ConnectButton />
      </header>

      <main className="main-content">
        {/* Holytag Validation Section */}
        <div className="card">
          <label htmlFor="holytag">Enter Holytag</label>
          <input
            id="holytag"
            type="text"
            value={holytag}
            onChange={(e) => setHolytag(e.target.value)}
            placeholder="Enter Holytag"
            className="input-field"
          />
          <button onClick={handleValidateHolytag}>Validate Holytag</button>
        </div>
        {/* Deposit Asset Section */}
        <div className="card">
          <label htmlFor="deposit-asset">Select deposit asset</label>
          <select
            id="deposit-asset"
            className="dropdown"
            value={depositAsset}
            onChange={(e) => setDepositAsset(e.target.value)}
          >
            <option value="">Select asset</option>
            {availableDepositAssets.map((asset) => (
              <option key={asset} value={asset}>
                {asset}
              </option>
            ))}
          </select>

          <label htmlFor="deposit-amount">Enter deposit amount</label>
          <input
            id="deposit-amount"
            type="text"
            value={depositAmount}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="0.00"
            className="input-field"
          />
          <p className="balance-text">Balance: {balance.toFixed(4)} MAX</p>
        </div>

          {/* Yield Strategy Section */}
        <div className="card">
          <label htmlFor="yield-strategy">Select yield strategy</label>
          {isLoading ? (
            <p>Loading strategies...</p>
          ) : (
            <Select
  options={formattedStrategies}
  value={formattedStrategies.find((s) => s.value === selectedStrategy)}
  onChange={(option) => setSelectedStrategy(option?.value || '')}
  styles={{
    control: (base) => ({
      ...base,
      backgroundColor: '#000', // Fond noir
      border: '1px solid #444', // Bordure grise foncée
      color: '#fff', // Texte blanc
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? '#333' : '#000', // Gris foncé sur hover, noir sinon
      color: '#fff', // Texte toujours blanc
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff', // Texte de la valeur sélectionnée en blanc
    }),
  }}
/>

          )}
          <p className="balance-text">Current Balance: 0.0000</p>
        </div>

        {/* Loan Asset Section */}
        <div className="card">
          <label htmlFor="loan-asset">Select loan asset</label>
          <select
            id="loan-asset"
            className="dropdown"
            value={loanAsset}
            onChange={(e) => setLoanAsset(e.target.value)}
          >
            <option value="">Select asset</option>
            {availableLoanAssets.map((asset) => (
              <option key={asset.symbol} value={asset.symbol}>
                {asset.label}
              </option>
            ))}
          </select>
          <p className="balance-text">
            Borrowable Limit: {}
          </p>
        </div>
         {/* Top-Up Section */}
         <div className="card">
          <button onClick={handleTopUp}>Perform Top-Up</button>
        </div>
      </main>
    </div>
  );
};

export default App;
