import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ onWalletsClick }) => {
  const navigate = useNavigate();

  const handleWalletsClick = () => {
    if (onWalletsClick) {
      onWalletsClick();
    }
    navigate('/');
  };

  return (
    <div className="sidebar">
      <NavLink to="/" onClick={handleWalletsClick} className={({ isActive }) => (isActive ? 'active' : '')}>
        <h3>Wallets</h3>
      </NavLink>
      <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>
        <h3>Transactions</h3>
      </NavLink>
      <div className="support">
        <h3>Support</h3>
      </div>
    </div>
  );
};

export default Sidebar;