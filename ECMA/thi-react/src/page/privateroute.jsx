import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./home";

const Privateroute = (children) => {
  const { user } = JSON.parse(localStorage.getItem("user"));
  if (user.id !== 1) {
    return <Navigate to="/home" />;
  }
  return children ? children : <Home />;
};

export default Privateroute;
