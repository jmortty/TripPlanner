import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the correct import path for your App component
import './index.css'; // Ensure this file exists and has proper Tailwind setup

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
