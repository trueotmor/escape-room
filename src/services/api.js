import axios from 'axios';
import { AxiosConfig } from 'consts';

const api = axios.create({
  baseURL: AxiosConfig.BackendUrl,
  timeout: AxiosConfig.RequestTimeout,
});

export default api;
