import React, { useState, useEffect } from "react";
import "./Comida.css";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorageUtils";
import { handleSearchAlimento } from "../utils/comidaUtils";

function Comida() {
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState("");
  const [filteredAlimentos, setFilteredAlimentos] = useState([]);
  const [selectedAlimento, setSelectedAlimento] = useState(null);
  const [foodList, setFoodList] = useState([]);
  const [totalKcal, setTotalKcal] = useState(0);
  const [calorieGoal, setCalorieGoal] = useState(1561.66); // Meta padrão

  useEffect(() => {
    // Recupera a lista de alimentos consumidos do localStorage
    const savedFoodList = getFromLocalStorage("foodList") || [];
    setFoodList(savedFoodList);

    // Calcula o total de calorias consumidas
    const totalCalories = savedFoodList.reduce((sum, food) => sum + food.kcal, 0);
    setTotalKcal(totalCalories);
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const results = handleSearchAlimento(searchTerm);
    setFilteredAlimentos(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAlimento || !quantity) {
      alert("Selecione um alimento e insira uma quantidade válida.");
      return;
    }

    const kcal = selectedAlimento.caloriasPorGrama * Number(quantity);

    const newFood = {
      nome: selectedAlimento.nome,
      gramas: Number(quantity),
      kcal,
      data: new Date().toLocaleString(),
    };

    // Atualiza a lista de alimentos consumidos
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);

    // Salva a lista no localStorage
    saveToLocalStorage("foodList", updatedFoodList);

    // Atualiza o total de calorias
    const newTotalKcal = totalKcal + kcal;
    setTotalKcal(newTotalKcal);

    // Limpa os campos
    setSearch("");
    setQuantity("");
    setFilteredAlimentos([]);
    setSelectedAlimento(null);
  };

  const progresso = Math.min((totalKcal / calorieGoal) * 100, 100);

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
            <a href="/login">Logout</a>
          </button>
        </nav>
      </header>

      <h2>Consumo de Comida</h2>

      <div className="progress-container">
        <p>Progresso de Calorias</p>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
        <p>
          {totalKcal.toFixed(2)}kcal de {calorieGoal.toFixed(2)}kcal
        </p>
      </div>

      <form className="input-container" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Digite o alimento"
            value={search}
            onChange={handleSearch}
          />
          {filteredAlimentos.length > 0 && (
            <ul className="suggestions">
              {filteredAlimentos.map((alimento, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedAlimento(alimento);
                    setSearch(alimento.nome);
                    setFilteredAlimentos([]);
                  }}
                >
                  {alimento.nome}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          type="number"
          placeholder="Quantidade (em gramas)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Registrar Comida</button>
      </form>

      <div className="food-list">
        <h3>Alimentos Consumidos</h3>
        <ul>
          {foodList.map((food, index) => (
            <li key={index}>
              <span>
                {food.nome} - {food.gramas}g - {food.kcal.toFixed(2)}kcal
              </span>{" "}
              <br />
              <small>{food.data}</small>
            </li>
          ))}
        </ul>
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

export default Comida;
