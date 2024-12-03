import React, { useState } from 'react';
import './Agua.css';

function Agua() {
  const [waterAmount, setWaterAmount] = useState('');
  const [waterList, setWaterList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [totalAgua, setTotalAgua] = useState(0)

const handleSubmit = (e) => {
  e.preventDefault()
  if (waterAmount) {
    const newWater = {
      amount: Number(waterAmount),
      time: new Date().toLocaleTimeString(),
    }
    setWaterList([...waterList, newWater])
    setTotalAgua((prevTotal) => prevTotal + Number(waterAmount))
    setWaterAmount("")
  }
}

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
          <button
            className="logout"
            onClick={() => alert("Deslogado com sucesso!")}
          >
            Logout
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

      {/* <div className="progress-container">
        <p>Progresso do consumo</p>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
        </div>
      </div> */}

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
      </div>

      <footer className="footer">
        <p>
          © 2024 Kcal-Culator. Projeto produzido pelo Grupo 4 de PI. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default Agua;