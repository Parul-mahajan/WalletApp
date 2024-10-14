import React from 'react';
import Sidebar from './sidebar';

const AnotherPage = () => {
  return (
    <div className="another-page-container">
      <Sidebar />
      <div className="main-content">
        <h1>Another Page</h1>
        <p>This is another page.</p>
      </div>
    </div>
  );
};

export default AnotherPage;