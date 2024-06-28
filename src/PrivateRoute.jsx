import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  const token = Cookies.get("token");
  console.log(token);

  if (!token) {
    // Render nothing or a loading indicator while the redirection is happening
    navigate("/signin");
  }

  return children;
}

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Cookies from "js-cookie";

// export default function PrivateRoute({ children }) {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

//   // useEffect(() => {
//   //   const token = Cookies.get("token");
//   //   if (!token) {
//   //     navigate("/signin");
//   //   }
//   // }, []);

//   return children;
// }
