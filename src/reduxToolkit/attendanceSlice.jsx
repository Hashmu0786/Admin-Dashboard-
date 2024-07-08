import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { api } from "../services/api";

const initialState = {
  Todaydata: [],
  workTime: [],
  attendancestatus: [],
  isLoading: false,
  error: null,
};

export const AttendanceTodayData = createAsyncThunk(
  "attendance/todaydata",
  async (filterQuery) => {
    let query = "";
    Object.entries(filterQuery).map(([key, value]) => {
      query += `${key}=${value}&`;
    });
    const token = Cookies.get("token");
    const response = await api.get(`attendance/daily/all?${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Todays Attendace", response.data);
    return response?.data?.data;
  }
);

//edit the Attendance status and approve status for the single employee
export const EditStatus = createAsyncThunk(
  "attendace/editstatus",
  async ({ id, data }) => {
    console.log("attendace Slice data", data);
    console.log("attendace Slice id", id);

    const token = Cookies.get("token");
    const response = await api.patch(`attendance/${id}/status`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("status change ", response.data);
    return response?.data;
  }
);

// update the multile status at once

export const MultiEditStatus = createAsyncThunk(
  "attendance/multiedit",
  async (data, thunkAPI) => {
    try {
      const token = Cookies.get("token");
      const response = await api.patch(`attendance/status`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Multi edit data:", data);
      console.log("Response from API:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Get the work Timing

export const WorkTiming = createAsyncThunk("attendance/worktime", async () => {
  const token = Cookies.get("token");
  const response = await api.get(`organization/work-timings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("worktiming", response.data);
  return response?.data;
});

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    clearAttendaceData: (state) => {
      state.Todaydata = [];
    },
  },
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
      })

      //edit the Attendance status and approve status for the single employee

      .addCase(EditStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.attendancestatus = action.payload;
      })
      .addCase(EditStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // update the multile status at once

      .addCase(MultiEditStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(MultiEditStatus.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(MultiEditStatus.rejected, (state, action) => {
        state.error = action.payload;
      })
      //Work timing
      .addCase(WorkTiming.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(WorkTiming.fulfilled, (state, action) => {
        (state.isLoading = false), (state.workTime = action.payload);
      })
      .addCase(WorkTiming.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});

export const { clearAttendaceData } = attendanceSlice.actions;
export default attendanceSlice.reducer;
