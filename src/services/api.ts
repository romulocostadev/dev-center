import axios from 'axios';

export const api = axios.create({
  // Insira a Url base do seu Back-end
  baseURL: 'httt://localhost:3333', // Exemplo de Url
});
