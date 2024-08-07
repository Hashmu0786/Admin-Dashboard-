// import "./App.css";
// import Layout from "./layout/Index.jsx";
// import Dashboard from "./dashboard/index.jsx";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Attendance from "./attendence/index.jsx";
// import Employee from "./employee/index.jsx";
// import Leave from "./leave/index.jsx";
// import Report from "./report/index.jsx";
// import Signin from "./signin/index.jsx";
// import Cookies from "js-cookie";
// import PageNotFound from "./sharedComponents/PageNotFound.jsx";

// export default function App() {
//   const isAuthenticated = Cookies.get("token");

//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/signin" element={<Signin />} />
//         <Route
//           path="/"
//           element={!isAuthenticated ? <Navigate to="/signin" /> : <Layout />}
//         >
//           <Route index element={<Dashboard />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="employee" element={<Employee />} />
//           <Route path="leave" element={<Leave />} />
//           <Route path="report" element={<Report />} />
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
import Attendance from "./attendence/index.jsx";
import Employee from "./employee/index.jsx";
import Leave from "./leave/index.jsx";
import Report from "./report/index.jsx";
import Signin from "./signin/index.jsx";
import Cookies from "js-cookie";
import PageNotFound from "./sharedComponents/PageNotFound.jsx";
import ChangePassword from "./password/ChangePassword.jsx";
import AddEmployee from "./employee/AddEmployee.jsx";

export default function App() {
  const isAuthenticated = Cookies.get("token");

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={!isAuthenticated ? <Navigate to="/signin" /> : <Layout />}
        >
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="employee" element={<Employee />} />
          <Route path="leave" element={<Leave />} />
          <Route path="report" element={<Report />} />
          <Route path="changePassword" element={<ChangePassword />} />

          {/* Catch-all route for Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* Catch-all route for Page Not Found outside of authenticated routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
