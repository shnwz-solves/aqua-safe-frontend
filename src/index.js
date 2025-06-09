// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS for body background etc.
import App from './App'; // The main App component (now handles routing)
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter provides routing context to the entire application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
