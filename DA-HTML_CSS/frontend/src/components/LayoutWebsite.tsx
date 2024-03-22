import React from "react";
import { Footer, Header } from ".";
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
