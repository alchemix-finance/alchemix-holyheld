import { useEffect, useState } from 'react';
import * as React from "react";
import { ethers } from 'ethers';
import { ConnectButton ,Theme, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import './App.css';
import logo from './assets/ALCX_Std_logo.png';

const App: React.FC = () => {
  const [depositAsset, setDepositAsset] = useState<string>('alUSD');
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [yieldStrategies, setYieldStrategies] = useState<string[]>([]); // Dynamic strategies
  const [selectedStrategy, setSelectedStrategy] = useState<string>('');
  const [loanAsset, setLoanAsset] = useState<string>('DAI');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch strategies from the blockchain
  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        setIsLoading(true);

        // Example: Replace with your smart contract interaction
        const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
        const contractAddress = '0xYourContractAddress'; // Replace with the correct contract address
        const abi = [
          // Replace with the correct ABI method
          'function getYieldStrategies() public view returns (string[])',
        ];
        const contract = new ethers.Contract(contractAddress, abi, provider);

        // Fetch strategies
        const strategies: string[] = await contract.getYieldStrategies();
        setYieldStrategies(strategies);

        // Automatically select the first strategy as default
        if (strategies.length > 0) {
          setSelectedStrategy(strategies[0]);
        }

        setIsLoading(false);
      } catch (err) {
        console.error('Failed to fetch strategies:', err);
        setError('Failed to load strategies. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchStrategies();
  }, []);

  const handleInputChange = (value: string, setState: React.Dispatch<React.SetStateAction<string>>) => {
    const regex = /^[0-9]*[.]?[0-9]*$/; // Allow only numbers and one decimal point
    if (regex.test(value)) {
      setState(value);
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Alchemix Logo" className="logo" />
        </div>
        <ConnectButton />
      </header>

      {/* Main Content */}
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
            <option value="alUSD">alUSD</option>
            <option value="alETH">alETH</option>
          </select>
          <label htmlFor="deposit-amount" className="mt-2">Enter deposit amount</label>
          <input
            id="deposit-amount"
            type="text"
            value={depositAmount}
            onChange={(e) => handleInputChange(e.target.value, setDepositAmount)}
            placeholder="0.00"
            className="input-field"
          />
          <p className="balance-text">Balance: 0.0000 MAX</p>
        </div>

        {/* Yield Strategy Section */}
        <div className="card">
          <label htmlFor="yield-strategy">Select yield strategy</label>
          {isLoading ? (
            <p>Loading strategies...</p>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <select
              id="yield-strategy"
              className="dropdown"
              value={selectedStrategy}
              onChange={(e) => setSelectedStrategy(e.target.value)}
            >
              {yieldStrategies.map((strategy, index) => (
                <option key={index} value={strategy}>
                  {strategy}
                </option>
              ))}
            </select>
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
            <option value="DAI">DAI</option>
            <option value="USDC">USDC</option>
          </select>
          <p className="balance-text">Borrowable Limit: 0.0000</p>
        </div>
      </main>
    </div>
  );
};

export default App;
