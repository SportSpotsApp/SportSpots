import axios from 'axios';

const api = axios.create({
    baseURL: 'http://sportspots.fr/api/',
});

export default api;
