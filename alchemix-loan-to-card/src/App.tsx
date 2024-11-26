import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span role="img" aria-label="alchemy-logo">
            🧪
          </span>{' '}
          Alchemix Loan To Card
        </div>
        <ConnectButton />
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="card">
          <label htmlFor="deposit-asset">Select deposit asset</label>
          <select id="deposit-asset">
            <option value="ETH">ETH</option>
            <option value="DAI">DAI</option>
          </select>
          <p>Balance: 0.0000 MAX</p>
        </div>

        <div className="card">
          <label htmlFor="yield-strategy">Select yield strategy</label>
          <select id="yield-strategy">
            <option value="compound">Compound</option>
            <option value="aave">Aave</option>
          </select>
          <p>Current Balance: 0.0000</p>
        </div>

        <div className="card">
          <label htmlFor="loan-asset">Select loan asset</label>
          <select id="loan-asset">
            <option value="DAI">DAI</option>
            <option value="USDC">USDC</option>
          </select>
          <p>Borrowable Limit: 0.0000</p>
        </div>
      </main>
    </div>
  );
};

export default App;
