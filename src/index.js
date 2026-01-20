import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hide the initial loader once the app has rendered
const loader = document.getElementById('initial-loader');
if (loader) {
  loader.classList.add('loader-hidden');
  // Optional: remove from DOM after transition
  setTimeout(() => {
    loader.remove();
  }, 500);
}
