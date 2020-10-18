import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:3333',
    // baseURL: 'http://e3c1ae181cd5.ngrok.io'
});

export default api;