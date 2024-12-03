import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Importando Navigate
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Home from './components/Home';
import Comida from './components/Comida';
import Agua from './components/Agua';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirecionando a raiz para /cadastro */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comida" element={<Comida />} />
          <Route path="/agua" element={<Agua />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
