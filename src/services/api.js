import axios from 'axios';
import { ERROR_404 } from '../consts';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,

    (error) => {
      const { response } = error;

      if (response?.status === HttpCode.NotFound) {
        return Promise.reject(HttpCode.NotFound);
      }

      return Promise.reject(error);
    },
  );

  return api;
};
