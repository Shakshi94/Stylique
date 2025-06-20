// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  token:null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.token= action.payload.token;
      document.cookie = `token=${action.payload.token}; path=/; max-age=${7 * 24 * 60 * 60};SameSite=None'Secure`;
    },
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
      document.cookie = 'token=; path=/; max-age=0'; // clear cookie
    }
  },
});

export const { loginSuccess, logout} = userSlice.actions;
export default userSlice.reducer;
