import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletComponent from './walletcomponent';
import AnotherPage from './anotherpage'; // Import your new page component
import Transactions from './transaction';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WalletComponent />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  </Router>
);

export default App;