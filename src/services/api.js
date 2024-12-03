import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',  // URL do seu backend (ajuste conforme necessário)
});

export default api;
