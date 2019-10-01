import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';

import App from './app';

const Main = () => {
  return (
    <App />
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);
