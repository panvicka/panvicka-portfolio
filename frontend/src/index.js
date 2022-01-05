import React from 'react';

import ReactDOM from 'react-dom';
import MoonLoader from 'react-spinners/MoonLoader';

import App from './App';
import './index.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.Suspense fallback={<MoonLoader css="margin-top: 9rem;" size={150} />}>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
