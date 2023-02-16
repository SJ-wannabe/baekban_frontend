import React from 'react';

import {Route, Routes} from 'react-router-dom';

import FindAccount from './pages/FindAccount/FindAccount';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/findAccount" element={<FindAccount />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
