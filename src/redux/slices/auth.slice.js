import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  token: null,
  Authenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    loadingStop: (state) => {
      state.loading = false;
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.Authenticated = true;
      state.userData = action.payload;
      state.token = action.payload.token;
      state.error = null;
    },
    loginError: (state, action) => {
      state.loading = false;
      state.Authenticated = false;
      state.userData = null;
      state.token = null;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.loading = false;
      state.Authenticated = false;
      state.userData = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  logOut,
  loadingStart,
  loadingStop,
} = authSlice.actions;

export default authSlice.reducer;
