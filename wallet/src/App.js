import React from 'react';
import ReactDOM from 'react-dom';
import WalletComponent from './walletcomponent.js';

const App = () => (
  <div>
    <WalletComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;