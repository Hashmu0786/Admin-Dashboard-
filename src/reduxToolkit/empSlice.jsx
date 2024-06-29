import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api.js";
import Cookies from "js-cookie";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchDataEmployee = createAsyncThunk(
  "employee/fetchData",
  async () => {
    const token = Cookies.get("token");
    const response = await api.get(`/employees`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data, "employees");
    return response?.data?.data;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
