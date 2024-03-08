import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LayoutAdmin from "./layoutadmin";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { user } = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  if (user.id !== 1) {
    toast.error("Bạn không có quyền truy cập ");
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
