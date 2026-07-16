import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout'),
  refreshToken: () => api.post('/auth/refresh'),
};

export const productService = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
};

export const salesService = {
  createSale: (data) => api.post('/sales', data),
  getSales: () => api.get('/sales'),
};

export const customerService = {
  getAll: () => api.get('/customers'),
  create: (data) => api.post('/customers', data),
  getById: (id) => api.get(`/customers/${id}`),
};

export default api;
