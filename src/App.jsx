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
import PrivateRoute from "./PrivateRoute.jsx";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function App() {
  let tokenset = false;

  useEffect(() => {
    if (Cookies.get("token")) {
      tokenset = true;
    }
  }, [Cookies.get("token")]);

  console.log(tokenset, "token");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            tokenset ? <Navigate to="/layout/*" /> : <Navigate to="/signin" />
          }
        />

        <Route path="/signin" element={<Signin />} />
        <Route
          path="/layout/*"
          element={!tokenset ? <Navigate to="/signin" /> : <Layout />}
        >
          <Route index element={<Dashboard />} />
          <Route
            path="attendance"
            element={
              <PrivateRoute>
                <Attendance />
              </PrivateRoute>
            }
          />
          <Route path="employee" element={<Employee />} />
          <Route path="leave" element={<Leave />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
}

// import "./App.css";
// import Layout from "./layout/Index.jsx";
// import Dashboard from "./dashboard/index.jsx";
// import Attendance from "./attendence/index.jsx";
// import Employee from "./employee/index.jsx";
// import Leave from "./leave/index.jsx";
// import Report from "./report/index.jsx";
// import Signin from "./signin/index.jsx";
// import PrivateRoute from "./PrivateRoute.jsx";
// import Cookies from "js-cookie";
// import { useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// const App = () => {
//   // useEffect(() => {
//   //   const token = Cookies.get("token");
//   //   if (!token) {
//   //     window.location.href = "/signin";
//   //   }
//   // }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/signin" />} />

//         <Route path="/signin" element={<Signin />} />

//         <Route path="/layout/*" element={<PrivateRoute />}>
//           <Route index element={<Layout />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="employee" element={<Employee />} />
//           <Route path="leave" element={<Leave />} />
//           <Route path="report" element={<Report />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
