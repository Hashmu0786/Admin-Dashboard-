import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api.js";
import Cookies from "js-cookie";

//  initialize the state

const initialState = {
  data: [],
  onedata: [],
  depList: [],
  newData: [],
  editdata: [],
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
    console.log(response.data, "employees");
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

// Edit the employee Data

export const EditEmpData = createAsyncThunk(
  "employee/editData",
  async ({ id, data }) => {
    console.log(id, "idddddddd");
    console.log(data, "dataaaaaaaa");
    const token = Cookies.get("token");
    const response = await api.put(`employees/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("edit the data", response.data);
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

//  fetch the Department list
export const DepartmentList = createAsyncThunk(
  "employee/departmentlist",
  async () => {
    const token = Cookies.get("token");
    const response = await api.get(`organization/departments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Department", response.data);
    return response?.data;
  }
);

// add the new employee

export const newEmployee = createAsyncThunk("employee/newAdd", async (data) => {
  const token = Cookies.get("token");
  const response = await api.post(`employees/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("new Employee added", response.data);
  return response?.data;
});

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    clearEmployeeData: (state) => {
      state.onedata = [];
    },
  },
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

      // Edit the employee data

      .addCase(EditEmpData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditEmpData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.editdata = action.payload;
      })
      .addCase(EditEmpData.rejected, (state, action) => {
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
      })

      //Department list
      .addCase(DepartmentList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DepartmentList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.depList = action.payload;
      })
      .addCase(DepartmentList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // add the new Employee
      .addCase(newEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newEmployee.fulfilled, (state, action) => {
        (state.isLoading = false), (state.newData = action.payload);
      })
      .addCase(newEmployee.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});
export const { clearEmployeeData } = employeeSlice.actions;
export default employeeSlice.reducer;
