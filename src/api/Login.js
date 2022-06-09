import axios from 'axios';

const api = axios.create({
  baseURL: "/api"
});

export const localLogin = (user_id, password) => api.post("/auth/login/local", {user_id, password});
export const localRegister = (user_id, password, email) => api.post("/auth/register/local", {user_id, password, email});
export const localLogout = () => api.post('/auth/logout');
export const checkStatus = () => axios.get('/api/auth/check');