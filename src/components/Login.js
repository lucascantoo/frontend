import React, { useState } from 'react';
import './Login.css';

// Função para manipular o login usando Local Storage
const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const loginUsuario = (email, senha) => {
  const usuarios = getFromLocalStorage('usuarios');
  const usuario = usuarios.find((u) => u.email === email && u.password === senha);
  if (usuario) {
    alert(`Bem-vindo, ${usuario.name}!`);
    return true;
  } else {
    alert('Email ou senha incorretos!');
    return false;
  }
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (email && password) {
      const sucesso = loginUsuario(email, password);
      if (sucesso) {
        // Redireciona para a página inicial
        window.location.href = '/home';
      }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
      </form>
      <p>
        Ainda não tem uma conta? <a href="/cadastro">Cadastre-se</a>
      </p>
    </div>
  );
}

export default Login;
