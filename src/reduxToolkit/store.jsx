import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import employeeReducer from "./empSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    employee: employeeReducer,
  },
});
