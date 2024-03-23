import React from "react";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default LayoutWebsite;
