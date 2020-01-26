import httpClient from './http-client.js';

export const getList = () => {
    return httpClient.get('/user-group-list');
};

export const create = (payload) => {
    if (!payload) {
        return Promise.reject(new Error('No payload'));
    }
    return httpClient.post('/user-group', payload);
};

export const update = (payload) => {
    if (!payload) {
        return Promise.reject(new Error('No payload'));
    }
    return httpClient.put('/user-group', payload);
};
