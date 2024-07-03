import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import employeeReducer from "./empSlice";
import attendanceReducer from "./attendanceSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    employee: employeeReducer,
    attendance: attendanceReducer,
    
  },
});
