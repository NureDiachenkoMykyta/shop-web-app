import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchGoods = () => axios.get(`${API_BASE_URL}/goods`);
export const addGood = (good) => axios.post(`${API_BASE_URL}/goods`, good);
export const updateGood = (id, good) => axios.put(`${API_BASE_URL}/goods/${id}`, good);
export const deleteGood = (id) => axios.delete(`${API_BASE_URL}/goods/${id}`);

export const fetchDepartments = () => axios.get(`${API_BASE_URL}/departments`);
export const addDepartment = (department) => axios.post(`${API_BASE_URL}/departments`, department);
export const updateDepartment = (id, department) => axios.put(`${API_BASE_URL}/departments/${id}`, department);
export const deleteDepartment = (id) => axios.delete(`${API_BASE_URL}/departments/${id}`);

export const fetchSales = () => axios.get(`${API_BASE_URL}/sales`);
export const addSale = (sale) => axios.post(`${API_BASE_URL}/sales`, sale);
export const updateSale = (id, sale) => axios.put(`${API_BASE_URL}/sales/${id}`, sale);
export const deleteSale = (id) => axios.delete(`${API_BASE_URL}/sales/${id}`);

export const fetchWorkers = () => axios.get(`${API_BASE_URL}/workers`);
export const addWorker = (worker) => axios.post(`${API_BASE_URL}/workers`, worker);
export const updateWorker = (id, worker) => axios.put(`${API_BASE_URL}/workers/${id}`, worker);
export const deleteWorker = (id) => axios.delete(`${API_BASE_URL}/workers/${id}`);
