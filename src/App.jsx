// import "./App.css";
// import Layout from "./layout/Index.jsx";
// import DashBoard from "./dashboard/index.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Attendance from "./attendence/index.jsx";
// import Employee from "./employee/index.jsx";
// import Leave from "./leave/index.jsx";
// import Report from "./report/index.jsx";
// import Signin from "./signin/index.jsx";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Default route to redirect to signin if not logged in */}
//         <Route path="/signin" exact element={<Signin />} />

//         {/* Protected route for authenticated users */}
//         <Route path="/layout" element={<Layout />}>
//           {/* Dashboard route */}
//           <Route index element={<DashBoard />} />
//           {/* Attendance route */}
//           <Route path="/attendance" element={<Attendance />} />
//           {/* Employee route */}
//           <Route path="/employee" element={<Employee />} />
//           {/* Leave route */}
//           <Route path="/leave" element={<Leave />} />
//           {/* Report route */}
//           <Route path="/report" element={<Report />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

import "./App.css";
import Layout from "./layout/Index.jsx";
import Dashboard from "./dashboard/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Attendance from "./attendance/index.jsx";
import Attendance from "./attendence/index.jsx";
import Employee from "./employee/index.jsx";
import Leave from "./leave/index.jsx";
import Report from "./report/index.jsx";
import Signin from "./signin/index.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to redirect to signin if not logged in */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Signin route */}
        <Route path="/signin" element={<Signin />} />

        {/* Protected route for authenticated users */}
        <Route path="/layout/*" element={<Layout />}>
          {/* Default to Dashboard when /layout is accessed */}
          <Route index element={<Dashboard />} />
          {/* Attendance route */}
          <Route path="attendance" element={<Attendance />} />
          {/* Employee route */}
          <Route path="employee" element={<Employee />} />
          {/* Leave route */}
          <Route path="leave" element={<Leave />} />
          {/* Report route */}
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
}
