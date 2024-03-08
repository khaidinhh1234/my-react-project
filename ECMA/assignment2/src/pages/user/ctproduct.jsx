import React from "react";
import { Link } from "react-router-dom";
import vanh from "./image/vanh.png";
const Chitietproducts = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li className="logo">
            <img
              src="http://localhost/D%e1%bb%b0%20%c3%81N%201/CinePass%20h%e1%bb%87%20th%e1%bb%91ng%20b%c3%a1n%20v%c3%a9%20s%e1%bb%91%201%20Vi%e1%bb%87t%20Nam%20(11)/Trang%20ng%c6%b0%e1%bb%9di%20d%c3%b9ng/imgavt/logo2.png"
              width={100}
            />
          </li>
          <li>
            <Link
              to="/"
              className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 "
            >
              Trang Chủ
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to=""
              className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 "
            >
              Sản Phẩm
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to=""
              className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 "
            >
              Thể Loại
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to=""
              className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 "
            >
              Liên Hệ
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/signin"
              className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 "
            >
              LognIn
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <div class="container">
          <div className="row-4  ">
            <div className="row tw-bg-fuchsia-400 rounded-top-3 pt-2 ">
              <div className="col">
                <h2>Lệnh truy tố </h2>
              </div>
            </div>
            <div className="row tw-bg-fuchsia-200 mt-1 pt-2">
              {" "}
              <div className="col">
                <img src={vanh} alt="" />
              </div>
              <div className="col">
                <h3>Tác giả : Trần thị Vân Anh </h3>
                <h3>Quê quán : Vĩnh Phúc </h3>
                <h3>Sinh Năm : 2005</h3>
              </div>
              <div className="col">
                <img src={vanh} alt="" />
              </div>
            </div>
            <div className="row bg-info ">
              {" "}
              <div className="col">hekk</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chitietproducts;
