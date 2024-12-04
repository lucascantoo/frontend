import React, { useState, useEffect } from 'react';
import './Agua.css';

// Funções auxiliares para manipulação do localStorage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

function Agua() {
  const [waterAmount, setWaterAmount] = useState('');
  const [waterList, setWaterList] = useState([]);
  const [totalAgua, setTotalAgua] = useState(0);

  // Carrega os dados do localStorage ao carregar o componente
  useEffect(() => {
    const savedWaterList = getFromLocalStorage('waterList');
    setWaterList(savedWaterList);

    const totalWater = savedWaterList.reduce((sum, water) => sum + water.amount, 0);
    setTotalAgua(totalWater);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (waterAmount) {
      const newWater = {
        amount: Number(waterAmount),
        time: new Date().toLocaleTimeString(),
      };

      const updatedWaterList = [...waterList, newWater];
      setWaterList(updatedWaterList);
      saveToLocalStorage('waterList', updatedWaterList);

      setTotalAgua((prevTotal) => prevTotal + Number(waterAmount));
      setWaterAmount('');
    } else {
      alert('Por favor, insira uma quantidade válida de água.');
    }
  };

  return (
    <div className="agua-container">
      <header>
        <nav>
          <div className="logo">Kcal-Culator</div>
          <ul className="nav-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/comida">Comida</a>
            </li>
            <li>
              <a href="/agua">Água</a>
            </li>
          </ul>
          <button className="logout" onClick={() => alert('Deslogado com sucesso!')}>
            <a href="/login">Logout</a>
          </button>
        </nav>
      </header>
      <h2 className="agua-title">Consumo de Água</h2>

      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Quantidade (em ml)"
          value={waterAmount}
          onChange={(e) => setWaterAmount(e.target.value)}
        />
        <button type="submit">Registrar Água</button>
      </form>

      <div className="water-list">
        <h3>Água Consumida</h3>
        <ul>
          {waterList.map((water, index) => (
            <li key={index}>
              <span>{water.amount}ml</span> <br />
              <small>{water.time}</small>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-agua">
        <p>
          Total consumido: <span>{totalAgua}ml</span>
        </p>
        <p>
          Meta de água sugerida: 2100ml.
        </p>
      </div>

      <footer className="footer">
        <p>
          © 2024 Kcal-Culator. Projeto produzido pelo Grupo 4 de PI. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Agua;
