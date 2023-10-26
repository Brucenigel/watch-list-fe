// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('token', state.token);
      localStorage.setItem('isAuthenticated',state.isAuthenticated);
     
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token' );
      localStorage.removeItem('isAuthenticated' );
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
