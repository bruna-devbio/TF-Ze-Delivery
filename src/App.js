import React from 'react';
import Home from './pages/Home/Home'

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    
    </Routes>
  );
}

export default App;
