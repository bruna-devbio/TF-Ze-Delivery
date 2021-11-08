import React from 'react';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Login" element={<Login />}/>
    </Routes>
  );
}

export default App;
