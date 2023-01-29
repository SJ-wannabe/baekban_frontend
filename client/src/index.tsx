import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
);
