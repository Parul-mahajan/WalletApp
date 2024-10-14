import React, { useState } from 'react';
import './App.css';

const wallets = [
  { name: 'BITCOIN', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 1', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 2', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 3', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 4', holding: 'BTC 0.00256' },
];

const WalletComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [walletName, setWalletName] = useState('');
  const [mnemonic, setMnemonic] = useState('');

  const handleDelete = (walletName) => {
    console.log(`Delete ${walletName}`);
  };

  const handleImportSubmit = (e) => {
    e.preventDefault();
    console.log(`Wallet Name: ${walletName}, Mnemonic: ${mnemonic}`);
    // Reset form and close modal
    setWalletName('');
    setMnemonic('');
    setModalOpen(false);
  };

  return (
    <div className="wallet-container">
      <div className="sidebar">
        <h3>Wallets</h3>
        <h3>Last Transactions</h3>
        <div className="support">
          <h3>Support</h3>
        </div>
      </div>
      <div className="main-content">
        <h2>Total Coins - {wallets.length}</h2>
        <div className="wallet-list">
          {wallets.map((wallet) => (
            <div className="wallet-item" key={wallet.name}>
              <div className="wallet-info">
                <span className="coin-icon">₿</span>
                <span>{wallet.name}</span>
              </div>
              <span>{wallet.holding}</span>
              <button className="delete-button" onClick={() => handleDelete(wallet.name)}>
                🗑️
              </button>
            </div>
          ))}
        </div>
        <button className="import-wallet-button" onClick={() => setModalOpen(true)}>
          + Import Wallet
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Import Wallet</h2>
            <form onSubmit={handleImportSubmit}>
              <div>
                <label>Enter your wallet name:</label>
                <input
                  type="text"
                  value={walletName}
                  onChange={(e) => setWalletName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Enter your Mnemonic:</label>
                <textarea
                  value={mnemonic}
                  onChange={(e) => setMnemonic(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <button className="close-modal" onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletComponent;