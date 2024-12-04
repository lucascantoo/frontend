import React, { useState } from "react";
import masculinoIcon from "../assets/homem.svg"; // Importando o ícone masculino
import femininoIcon from "../assets/mulher.svg"; // Importando o ícone feminino
import "./Cadastro.css"; // Certifique-se de que o CSS está correto

// Funções de manipulação do Local Storage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const calcularMetas = (usuario) => {
  const { gender, weight, height, age } = usuario;
  const calorias =
    gender === "Masculino"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  const agua = weight * 35; // ml de água por dia
  return { calorias: Math.round(calorias), agua: Math.round(agua) };
};

const cadastrarUsuario = (usuario) => {
  const usuarios = getFromLocalStorage("usuarios");
  if (usuarios.some((u) => u.email === usuario.email)) {
    alert("Email já cadastrado!");
    return false;
  }
  const metas = calcularMetas(usuario);
  const usuarioComMetas = { ...usuario, ...metas };
  usuarios.push(usuarioComMetas);
  saveToLocalStorage("usuarios", usuarios);
  alert("Usuário cadastrado com sucesso!");
  return true;
};

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gender === "") {
      alert("Por favor, selecione um gênero.");
      return;
    }

    const novoUsuario = {
      name,
      email,
      password,
      gender,
      weight,
      height,
      age,
    };

    const sucesso = cadastrarUsuario(novoUsuario);
    if (sucesso) {
      // Redireciona para a tela de login
      window.location.href = "/login";
    }
  };

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender); // Atualiza o gênero selecionado
  };


  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="gender-options">
          <img
            src={masculinoIcon}
            alt="Masculino"
            className={`gender-icon ${
              gender === "Masculino" ? "selected" : ""
            }`}
            onClick={() => handleGenderClick("Masculino")}
          />
          <img
            src={femininoIcon}
            alt="Feminino"
            className={`gender-icon ${
              gender === "Feminino" ? "selected" : ""
            }`}
            onClick={() => handleGenderClick("Feminino")}
          />
        </div>
        <input
          type="number"
          placeholder="Peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Cadastro;
