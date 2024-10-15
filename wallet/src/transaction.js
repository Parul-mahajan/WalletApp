import React from 'react';
import Sidebar from './sidebar';
import './App.css'; // Assuming you have some common styles
import './walletcomponent.css'; // Assuming you have some wallet component specific styles
import Navbar from './navbar';

const Transactions = () => {
  const transactions = [
    { date: '12/11/2020', time: '10:31:20 AM', wallet: 'Aru', amount: '0.5268 BTC', result: 'RECEIVED', status: 'SUCCESS' },
    // Add more transactions as required
  ];

  return (
    // add nav bar and make sure that since transactions container has flex the navbar should be outside the transactions container
    // add a class to the transactions container to style it  

    <div className="wallet-container">
      <Navbar />
    <div className="transactions-container">
      
      <Sidebar />
      <div className="transactions-content">
        <h2>Transactions</h2>
        <p>Total Transactions - {transactions.length}</p>
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Wallet</th>
              <th>Amount</th>
              <th>Result</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.date} <br /> {tx.time}</td>
                <td>{tx.wallet}</td>
                <td>{tx.amount}</td>
                <td className="result-received">{tx.result}</td>
                <td className="status-success">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Transactions;