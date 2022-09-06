import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import { CountriesInfoProvider } from './contextApi/contexts/CountryInfoContext';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountriesInfoProvider>
    <App />
  </CountriesInfoProvider>
);
