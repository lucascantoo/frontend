import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height === "" || weight === "") {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage("Você está abaixo do peso.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("Você está com peso normal.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("Você está com sobrepeso.");
    } else {
      setMessage("Você está com obesidade.");
    }
  };

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
            <a href="/login">Logout</a>
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

      <div className="imc-info">
        <h3>O que é IMC?</h3>
        <p>
          O IMC (Índice de Massa Corporal) é uma medida que relaciona o peso e a altura para avaliar se uma pessoa está abaixo do peso, com peso normal ou com sobrepeso. Ele é amplamente usado para monitorar a saúde e estabelecer metas de atividades físicas.
        </p>
        <h3>Como calcular o IMC?</h3>
        <p>
          O cálculo é feito dividindo o peso em quilos pela altura em metros ao quadrado (m/l²). Por exemplo, nossa calculadora usa essa fórmula para fornecer resultados fáceis de interpretar e ajudar você a entender seu peso ideal.
        </p>
        <h3>Fatores que influenciam o IMC</h3>
        <p>
          Idade, gênero e composição corporal influenciam no IMC. Homens tendem a ter mais massa muscular, o que pode resultar em valores mais altos. Já para mulheres, os valores normais variam. Crianças e adolescentes possuem faixas específicas.
        </p>
        <h3>Como interpretar o IMC</h3>
        <p>
          O IMC é classificado em abaixo do peso, peso normal, sobrepeso e obesidade. Valores normais variam de 18,5 a 24,9 para adultos. Acima de 30, indica obesidade, e acima de 40, obesidade grave.
        </p>
        <h3>Consequências de valores altos ou baixos</h3>
        <p>
          IMC alto aumenta o risco de doenças como diabetes, hipertensão e problemas cardiovasculares. Já valores baixos podem indicar deficiências nutricionais, enfraquecimento do sistema imunológico e risco de osteoporose.
        </p>
        <h3>Críticas ao IMC</h3>
        <p>
          Embora útil, o IMC não considera a composição corporal detalhada, como porcentagem de gordura e massa muscular. Por isso, pode não refletir riscos em atletas ou pessoas com estilos de vida específicos.
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

export default Home;
