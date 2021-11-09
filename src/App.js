import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
