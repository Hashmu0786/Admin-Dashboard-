import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { api } from "../services/api";

const initialState = {
  Todaydata: [],
  isLoading: false,
  error: null,
};

export const AttendanceTodayData = createAsyncThunk(
  "attendance/todaydata",
  async (date) => {
    const token = Cookies.get("token");
    // const response = await api.get(`attendance/daily/all?date=${date}`, {
    const response = await api.get(`attendance/daily/all?date=2024-07-01`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Todays Attendace", response.data);
    return response?.data?.data;
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //   fetch the todays attendance data
      .addCase(AttendanceTodayData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AttendanceTodayData.fulfilled, (state, action) => {
        (state.isLoading = false), (state.Todaydata = action.payload);
      })
      .addCase(AttendanceTodayData.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});

export default attendanceSlice.reducer;