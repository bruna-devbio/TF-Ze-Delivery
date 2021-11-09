import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login'
import Home from './pages/Home/home'
import Register from './pages/Register/register'
import Cart from './pages/Cart/cart';
import Vouchers from './pages/Vouchers/vouchers';


import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/vouchers" element={<Vouchers />}/>
    </Routes>
  );
}

export default App;
