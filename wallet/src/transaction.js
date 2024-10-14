import React from 'react';
import Sidebar from './sidebar';
import './App.css'; // Assuming you have some common styles

const Transactions = () => {
  const transactions = [
    { date: '12/11/2020', time: '10:31:20 AM', wallet: 'Aru', amount: '0.5268 BTC', result: 'RECEIVED', status: 'SUCCESS' },
    // Add more transactions as required
  ];

  return (
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
  );
};

export default Transactions;