import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api.js";
import Cookies from "js-cookie";

//  initialize the state

const initialState = {
  data: [],
  onedata: [],
  deleteData: [],
  isLoading: false,
  error: null,
};

// fetching the all employee data

export const fetchDataEmployee = createAsyncThunk(
  "employee/fetchData",
  async () => {
    const token = Cookies.get("token");
    const response = await api.get(`/employees`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data, "employees");
    return response?.data?.data;
  }
);

// fetching the Single employee data

export const oneEmployeeData = createAsyncThunk(
  "employee/OneData",
  async (id) => {
    const token = Cookies.get("token");
    console.log(id);
    const response = await api.get(`employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("single Data", response.data);
    return response?.data?.data;
  }
);

// Delete the single employee data

export const DeltetOneEmployee = createAsyncThunk(
  "employee/OneDelete",
  async (id) => {
    const token = Cookies.get("token");
    const response = await api.delete(`employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Delete the single data", response.data);
    return response?.data;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // for the all employee data
      .addCase(fetchDataEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // single data check
      .addCase(oneEmployeeData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(oneEmployeeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.onedata = action.payload;
      })
      .addCase(oneEmployeeData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //Delete the single data
      .addCase(DeltetOneEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeltetOneEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteData = action.payload;
      })
      .addCase(DeltetOneEmployee.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default employeeSlice.reducer;
