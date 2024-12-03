import { useEffect, useState } from 'react';
import * as React from "react";
import { formatUnits } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient } from 'wagmi';
import { zeroAddress } from 'viem';
import { useBorrowableLimit } from './hooks/useBorrowableLimit';
import { useChain } from './hooks/useChain';
import { VAULTS } from './lib/queries/useVaults';
import { SYNTH_ASSETS, SYNTH_ASSETS_METADATA } from './lib/config/synths';
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

  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const chain = useChain();

  

  // Get available deposit assets from vaults config
  const availableDepositAssets = React.useMemo(() => {
    if (!chain.id) return [];
    
    const vaults = VAULTS[chain.id];
    if (!vaults) return [];

    // Get unique underlying symbols
    return [...new Set(Object.values(vaults).map(vault => vault.underlyingSymbol))];
  }, [chain.id]);
  

  // Get available yield strategies for selected deposit asset
  const availableStrategies = React.useMemo(() => {
    if (!chain.id || !depositAsset) return [];
    
    const vaults = VAULTS[chain.id];
    if (!vaults) return [];

    return Object.entries(vaults)
      .filter(([_, vault]) => vault.underlyingSymbol === depositAsset)
      .map(([address, vault]) => ({
        address,
        label: vault.label,
        image: vault.image,
        yieldSymbol: vault.yieldSymbol
      }));
  }, [chain.id, depositAsset]);

  useEffect(() => {
    if (depositAsset && availableStrategies.length > 0) {
      setIsLoading(false); // Les stratégies sont chargées
    } else {
      setIsLoading(true); // Aucune stratégie ou chargement en cours
    }
  }, [depositAsset, availableStrategies]);

  useEffect(() => {
    try {
      if (!chain.id || !VAULTS[chain.id]) {
        throw new Error('Vaults not configured for this chain.');
      }
      setError(null); // Aucun problème
    } catch (err: any) {
      setError(err.message); // Capture l'erreur
      setIsLoading(false);
    }
  }, [chain.id]);
  

  const formattedStrategies = availableStrategies.map((strategy) => ({
    value: strategy.address,
    label: strategy.label,
  }));

  // Get available loan assets
  const availableLoanAssets = React.useMemo(() => {
    return Object.entries(SYNTH_ASSETS_METADATA).map(([key, metadata]) => ({
      symbol: key,
      ...metadata
    }));
  }, []);

  // Borrowable limit hook
  const { borrowableLimit, isCalculating } = useBorrowableLimit(
    depositAmount,
    depositAsset,
    address || zeroAddress,
    walletClient || null
  );

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
                <div className="flex items-center">
                  <img 
                    src={asset.icon} 
                    alt={asset.label} 
                    className="w-6 h-6 mr-2"
                  />
                  {asset.label}
                </div>
              </option>
            ))}
          </select>
          <p className="balance-text">
            Borrowable Limit: {formatUnits(borrowableLimit, 18)}
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;