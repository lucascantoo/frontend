import React, { useState } from "react"
import "./Comida.css"

function Comida() {
  const [foodItem, setFoodItem] = useState("")
  const [quantity, setQuantity] = useState("")
  const [foodList, setFoodList] = useState([])
  const [progress, setProgress] = useState(0)
  const [totalGramas, setTotalGramas] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (foodItem && quantity) {
      const newFood = {
        name: foodItem,
        gramas: Number(quantity),
        time: new Date().toLocaleTimeString(),
      }
      setFoodList([...foodList, newFood])
      setTotalGramas((prevTotal) => prevTotal + Number(quantity))
      setFoodItem("")
      setQuantity("")
    }
  }

  return (
    <div className="comida-container">
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
      <h2>Consumo de Comida</h2>

      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o alimento"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade (em gramas)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Registrar Comida</button>
      </form>

      {/* <div className="progress-container">
        <p>Progresso do consumo</p>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div> */}

      <div className="food-list">
        <h3>Alimentos Consumidos</h3>
        <ul>
          {foodList.map((food, index) => (
            <li key={index}>
              <span>
                {food.name} - {food.gramas}g
              </span>{" "}
              <br />
              <small>{food.time}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-gramas">
        <p>
          Total consumido: <span>{totalGramas}g</span>
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

export default Comida
