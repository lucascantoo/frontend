// src/utils/comidaUtils.js

import { saveToLocalStorage, getFromLocalStorage } from './localStorageUtils';

export const handleSearchAlimento = (searchTerm) => {
    const alimentos = [
      { nome: "Arroz", caloriasPorGrama: 1.3 },
      { nome: "Feijão", caloriasPorGrama: 1.2 },
      { nome: "Frango", caloriasPorGrama: 2.0 },
      { nome: "Batata", caloriasPorGrama: 0.9 },
      { nome: "Carne Bovina", caloriasPorGrama: 2.5 },
      { nome: "Carne Suína", caloriasPorGrama: 3.0 },
      { nome: "Peixe", caloriasPorGrama: 1.8 },
      { nome: "Ovo", caloriasPorGrama: 1.4 },
      { nome: "Leite", caloriasPorGrama: 0.6 },
      { nome: "Queijo", caloriasPorGrama: 3.2 },
      { nome: "Pão", caloriasPorGrama: 2.5 },
      { nome: "Macarrão", caloriasPorGrama: 1.5 },
      { nome: "Cenoura", caloriasPorGrama: 0.4 },
      { nome: "Tomate", caloriasPorGrama: 0.2 },
      { nome: "Alface", caloriasPorGrama: 0.1 },
      { nome: "Brócolis", caloriasPorGrama: 0.3 },
      { nome: "Maçã", caloriasPorGrama: 0.5 },
      { nome: "Banana", caloriasPorGrama: 0.9 },
      { nome: "Laranja", caloriasPorGrama: 0.4 },
      { nome: "Abacaxi", caloriasPorGrama: 0.5 },
      { nome: "Manteiga", caloriasPorGrama: 7.2 },
      { nome: "Azeite", caloriasPorGrama: 9.0 },
      { nome: "Óleo de Soja", caloriasPorGrama: 9.0 },
      { nome: "Açúcar", caloriasPorGrama: 4.0 },
      { nome: "Mel", caloriasPorGrama: 3.0 },
      { nome: "Chocolate", caloriasPorGrama: 5.3 },
      { nome: "Biscoito", caloriasPorGrama: 4.5 },
      { nome: "Cereal", caloriasPorGrama: 3.8 },
      { nome: "Amendoim", caloriasPorGrama: 5.6 },
      { nome: "Castanha", caloriasPorGrama: 6.0 },
      { nome: "Nozes", caloriasPorGrama: 6.5 },
      { nome: "Amêndoa", caloriasPorGrama: 6.0 },
      { nome: "Batata Doce", caloriasPorGrama: 0.8 },
      { nome: "Abobrinha", caloriasPorGrama: 0.2 },
      { nome: "Pepino", caloriasPorGrama: 0.1 },
      { nome: "Berinjela", caloriasPorGrama: 0.2 },
      { nome: "Cebola", caloriasPorGrama: 0.4 },
      { nome: "Alho", caloriasPorGrama: 1.5 },
      { nome: "Morango", caloriasPorGrama: 0.3 },
      { nome: "Melancia", caloriasPorGrama: 0.3 },
      { nome: "Mamão", caloriasPorGrama: 0.4 },
      { nome: "Coco", caloriasPorGrama: 3.5 },
      { nome: "Iogurte", caloriasPorGrama: 0.6 },
      { nome: "Sorvete", caloriasPorGrama: 2.2 },
      { nome: "Suco de Laranja", caloriasPorGrama: 0.5 },
      { nome: "Refrigerante", caloriasPorGrama: 0.4 },
      { nome: "Café com Açúcar", caloriasPorGrama: 0.2 },
      { nome: "Chá", caloriasPorGrama: 0.1 },
      { nome: "Água de Coco", caloriasPorGrama: 0.2 },
    ];
  
    return alimentos.filter((alimento) =>
      alimento.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

export const handleSelectAlimento = (alimento, quantidade) => {
  if (!alimento || !quantidade) {
    alert('Selecione um alimento e insira a quantidade!');
    return;
  }

  const kcal = alimento.caloriasPorGrama * Number(quantidade);
  const consumos = getFromLocalStorage('foodList') || [];

  const newConsumo = {
    nome: alimento.nome,
    gramas: Number(quantidade),
    kcal,
    data: new Date().toLocaleString(),
  };

  consumos.push(newConsumo);
  saveToLocalStorage('foodList', consumos);
  alert(`Consumo registrado: ${newConsumo.nome} - ${newConsumo.kcal.toFixed(2)}kcal`);
};
