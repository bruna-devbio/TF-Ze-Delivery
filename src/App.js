import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Register from './pages/Register'


import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
