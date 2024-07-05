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
  async (date) => {
    const token = Cookies.get("token");
    const response = await api.get(`attendance/daily/all?date=${date}`, {
      // const response = await api.get(`attendance/daily/all?date=2024-07-05`, {
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

// export const EditStatus = createAsyncThunk(
//   "attendance/editstatus",
//   async ({ id, data }, { rejectWithValue }) => {
//     try {
//       console.log("attendance Slice data", data);
//       console.log("attendance Slice id", id);

//       const token = Cookies.get("token");
//       const response = await api.patch(`attendance/${id}/status`, data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log("status change ", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error changing status: ", error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

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
