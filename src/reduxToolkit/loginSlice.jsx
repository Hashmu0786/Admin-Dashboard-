// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const baseUrl = "https://56kjq9dz-8000.inc1.devtunnels.ms/";

// const initialState = {
//   isLoading: false,
//   error: null,
//   addStatus: null,
//   credential: {},
//   isAuthenticated: false,
// };

// export const signin = createAsyncThunk(
//   "admin/signin",
//   async (credential, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await axios.post(
//         `${baseUrl}api/auth/admin/login`,
//         credential
//       );
//       if (response.data.status === "success") {
//         dispatch(addTokenToCookies({ token: response.data.token }));
//         dispatch(checkAuthentication());
//         window.location.href = "/layout";
//         return response.data;
//       } else {
//         throw new Error("Failed to sign in");
//       }
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     addTokenToCookies: (state, action) => {
//       const { token } = action.payload;
//       document.cookie = `token=${token}; path=/`;
//     },
//     checkAuthentication: (state) => {
//       const token = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("token="));
//       state.isAuthenticated = !!token;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signin.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(signin.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.credential = action.payload;
//         state.error = null;
//         state.addStatus = "fulfilled";
//       })
//       .addCase(signin.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//         state.addStatus = "rejected";
//       });
//   },
// });

// export const { addTokenToCookies, checkAuthentication } = loginSlice.actions;

// export default loginSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://56kjq9dz-8000.inc1.devtunnels.ms/";

const initialState = {
  isLoading: false,
  error: null,
  addStatus: null,
  credential: {},
  isAuthenticated: false,
};

export const signin = createAsyncThunk(
  "admin/signin",
  async (credential, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `${baseUrl}api/auth/admin/login`,
        credential
      );
      if (response.data.status === "success") {
        dispatch(addTokenToCookies({ token: response.data.token }));
        dispatch(checkAuthentication());
        window.location.href = "/layout";
        return response.data;
      } else {
        throw new Error("Failed to sign in");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      return rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addTokenToCookies: (state, action) => {
      const { token } = action.payload;
      Cookies.set("token", token, { path: "/" });
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

export const { addTokenToCookies, checkAuthentication, clearAuthentication } =
  loginSlice.actions;

export default loginSlice.reducer;
