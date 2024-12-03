import React, { useState } from "react"
import "./Home.css"
import Logo from "../assets/Logo.svg"

function Home() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [message, setMessage] = useState("")

  const calculateBMI = (e) => {
    e.preventDefault()
    if (height === "" || weight === "") {
      setMessage("Por favor, preencha todos os campos.")
      return
    }
    const heightInMeters = parseFloat(height) / 100
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters)
    setBmi(bmiValue.toFixed(2))

    if (bmiValue < 18.5) {
      setMessage("Você está abaixo do peso.")
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("Você está com peso normal.")
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("Você está com sobrepeso.")
    } else {
      setMessage("Você está com obesidade.")
    }
  }

  return (
    <div className="home-container">
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
      <h2>Bem-vindo ao Kcal-Culator!</h2>
      <div className="information-box">
        <p>Sua ferramenta completa para uma vida mais saudável!</p>
        <p>
          Aqui você encontra calculadora de IMC, controle de calorias e dicas
          personalizadas para melhorar seus hábitos alimentares.
        </p>
        <p>
          Monitore sua hidratação, acompanhe seu progresso e transforme sua
          saúde de forma simples e eficiente.
        </p>
      </div>
      {/* <button onClick={() => (window.location.href = "/comida")}>
        Consumo de Comida
      </button>
      <button onClick={() => (window.location.href = "/agua")}>
        Consumo de Água
      </button> */}

      <div className="bmi-calculator">
        <h3>Calculadora de IMC</h3>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Altura (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Digite sua altura"
            />
          </div>
          <div>
            <label>Peso (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Digite seu peso"
            />
          </div>
          <button type="submit">Calcular IMC</button>
        </form>
        {bmi && (
          <div className="bmi-result">
            <h4>Seu IMC: {bmi}</h4>
            <p>{message}</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <p>© 2024 Kcal-Culator. Projeto produzido pelo Grupo 4 de PI. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Home
