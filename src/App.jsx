import "./App.css";
import Layout from "./layout/Index.jsx";
import Dashboard from "./dashboard/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Attendance from "./attendence/index.jsx";
import Employee from "./employee/index.jsx";
import Leave from "./leave/index.jsx";
import Report from "./report/index.jsx";
import Signin from "./signin/index.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/layout/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="employee" element={<Employee />} />
          <Route path="leave" element={<Leave />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
}
