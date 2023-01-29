import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);
