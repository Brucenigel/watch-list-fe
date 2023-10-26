// api.js

import axios from 'axios';

const userApi = axios.create({
  baseURL: process.env.REACT_APP_API_ORIGIN,
});

export default userApi;
