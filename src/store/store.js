import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { AxiosConfig, HttpCode, SliceNames } from 'consts';
import { setServerErrorStatus } from '../store/main/main-data';
import { mainReducer } from './main/main-data';

const api = axios.create({
  baseURL: AxiosConfig.BackendUrl,
  timeout: AxiosConfig.RequestTimeout,
});

const rootReducer = { [SliceNames.Main]: mainReducer };

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const status = response?.status;

    if (
      status &&
      status >= HttpCode.ServerErrorMin &&
      status <= HttpCode.ServerErrorMax
    ) {
      store.dispatch(setServerErrorStatus());
    }

    return Promise.reject(error);
  },
);

export { api };

export default store;
