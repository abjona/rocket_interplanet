import axios from 'axios';

export const API_URL = 'http://192.168.100.58:8080/rocketInterplanet';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
