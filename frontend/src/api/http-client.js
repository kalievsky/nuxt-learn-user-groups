import axios from 'axios';

const config = {
    baseURL: process.client ? `${window.location.origin}/api/` : 'http://backend/',
};

const httpClientInstance = axios.create(config);

export default httpClientInstance;
