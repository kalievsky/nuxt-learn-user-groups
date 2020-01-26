import httpClient from './http-client.js';

export const getList = (userGroupId) => {
    if (!userGroupId) {
        return Promise.reject(new Error('No userGroupId'));
    }
    return httpClient.get('/user-list', {
        params: {
            userGroupId,
        },
    });
};

export const create = (payload) => {
    if (!payload) {
        return Promise.reject(new Error('No payload'));
    }
    return httpClient.post('/user', payload);
};

export const update = (payload) => {
    if (!payload) {
        return Promise.reject(new Error('No payload'));
    }
    return httpClient.put('/user', payload);
};
