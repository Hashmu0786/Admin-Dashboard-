import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice"; // Adjust the path as necessary

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
