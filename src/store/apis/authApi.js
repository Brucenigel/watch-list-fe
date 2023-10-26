import axios from 'axios';
import store from './store'; 

const instance = axios.create({
    baseURL: 'http://localhost:8000',
});

// Add an interceptor to include the token in the headers
instance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
