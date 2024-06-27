import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://56kjq9dz-8000.inc1.devtunnels.ms/";

const initialState = {
  isLoading: false,
  error: null,
  addStatus: null,
  credential: {},
};

export const signin = createAsyncThunk("admin/signin", async (credential) => {
  const response = await axios.post(
    `${baseUrl}api/auth/admin/login`,
    credential
  );
  return response.data;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addTokenToLocalStorage: (state, action) => {
      localStorage.setItem("token", action.payload.token);
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
        state.credential = action.payload;
        state.error = null;
        state.addStatus = "fulfilled";
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.addStatus = "rejected";
      });
  },
});

export const { addTokenToLocalStorage } = loginSlice.actions;

export default loginSlice.reducer;
