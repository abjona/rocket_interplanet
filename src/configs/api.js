import axios from 'axios';

export const API_URL = 'https://rocket2020.herokuapp.com/rocketInterplanet';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
