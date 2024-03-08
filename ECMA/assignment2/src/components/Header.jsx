import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark tw-bg-purple-500"
        aria-label="Third navbar example"
      >
        <div className="container tw-bg-purple-500">
          <a className="navbar-brand" href="#">
            <img
              src="http://localhost/D%e1%bb%b0%20%c3%81N%201/CinePass%20h%e1%bb%87%20th%e1%bb%91ng%20b%c3%a1n%20v%c3%a9%20s%e1%bb%91%201%20Vi%e1%bb%87t%20Nam%20(11)/Trang%20ng%c6%b0%e1%bb%9di%20d%c3%b9ng/imgavt/logo2.png"
              width={120}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <nav className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Chào Mừng Bạn Đã Đến Đây Với Chúng Tôi
                </a>
              </li>
            </nav>
            <form role="search">
              <input
                className="form-control tw-h-8 "
                type="search"
                placeholder="Tìm Kiếm "
                aria-label="Search"
              />
            </form>{" "}
            <div className="tw-ml-4">
              <Link
                to=""
                type="button"
                className=" tw-ml-1 tw-pt-1 tw-text-3xl tw-text-black"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ion-icon name="person-outline"></ion-icon>
              </Link>
              <Link
                to="/signup"
                type="button"
                className=" tw-ml-3 tw-pt-1 tw-text-3xl tw-text-black"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ion-icon name="exit-outline"></ion-icon>
              </Link>
            </div>
            <div className="btn-group"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
