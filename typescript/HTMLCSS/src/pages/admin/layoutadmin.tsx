import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet></Outlet>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LayoutAdmin;
