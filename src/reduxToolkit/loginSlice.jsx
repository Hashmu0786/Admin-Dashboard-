import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const baseUrl = "https://56kjq9dz-8000.inc1.devtunnels.ms/";

const initialState = {
  isLoading: false,
  error: null,
  addStatus: null,
  credential: {},
  isAuthenticated: false,
};

export const signin = createAsyncThunk("admin/signin", async (credential) => {
  const response = await axios.post(
    `${baseUrl}api/auth/admin/login`,
    credential
  );
  return response;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addTokenToCookies: (state, action) => {
      const { token } = action.payload;
      Cookies.set("token", token, { path: "/" });
      state.isAuthenticated = true;
    },
    checkAuthentication: (state) => {
      const token = Cookies.get("token");
      if (!token) {
        state.isAuthenticated = false;
      }
      state.isAuthenticated = true;
    },
    clearAuthentication: (state) => {
      Cookies.remove("token", { path: "/" });
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.addStatus = "fulfilled";
        console.log(action.payload.data.token);
        if (action.payload.data.token)
          Cookies.set("token", action.payload.data.token);
        state.isAuthenticated = true;
        window.location.href = "/";
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.addStatus = "rejected";
      });
  },
});

export const { addTokenToCookies, checkAuthentication, clearAuthentication } =
  loginSlice.actions;

export default loginSlice.reducer;
