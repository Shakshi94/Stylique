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
    },
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
    }
  },
});

export const { loginSuccess, logout} = userSlice.actions;
export default userSlice.reducer;
