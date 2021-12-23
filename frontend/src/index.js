import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.Suspense fallback={<div>Loading... </div>}>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
