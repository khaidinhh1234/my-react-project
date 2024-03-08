import React from "react";
import { Link } from "react-router-dom";
import "../../style2.css";
import myImage4 from "./image/standee-su-kien-11.webp";

const Index = ({ sanphams }) => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li className="logo">
              <img
                src="http://localhost/D%e1%bb%b0%20%c3%81N%201/CinePass%20h%e1%bb%87%20th%e1%bb%91ng%20b%c3%a1n%20v%c3%a9%20s%e1%bb%91%201%20Vi%e1%bb%87t%20Nam%20(11)/Trang%20ng%c6%b0%e1%bb%9di%20d%c3%b9ng/imgavt/logo2.png"
                width={100}
              />
            </li>
            <li>Trang Chủ</li>
            <li>Sản Phẩm</li>
            <li>Thể Loại</li>
            <li>Liên Hệ</li>
            <Link to="/signin" className="btn text-bg-secondary  ">
              SignIn
            </Link>
          </ul>
        </nav>
        <div className="header-text tw-text-white">
          <h1>PHIM HAY NHẤT</h1>
          <p> </p>
          <span>“CHỈ CẦN TÔI CÒN SỐNG, VÁN BÀI NÀY VẪN CHƯA THỂ KẾT THÚC”</span>
          <div className="text-btn">
            <button className="text-btn-1">Đặt vé </button>
            <button className="text-btn-2">Đọc thêm</button>
          </div>
        </div>
      </header>
      <section className="banner-text">
        Giảm giá <span> lần mua đầu tiên.</span>
      </section>
      <section className="danhmuc-sp">
        <div className="danhmuc-sp-text">
          <h1>PHIM MỚI NHẤT</h1>
          <hr />
        </div>
        <div className="san-pham tw-mt-10">
          {sanphams.map((sp, i) => (
            <div className="san-pham-1 " key={i}>
              <img className="san-pham1 " src={sp.image} alt />
              <div className="sp-text">
                <p>{sp.name}</p>
                <div>
                  <span>Thời lượng: {sp.tl}</span>
                </div>
              </div>
              <Link
                to={`/ctproducts/${sp.id}}`}
                className="btn bg-info-subtle   btn-outline-primary  "
              >
                Đặt vé
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="about-user tw-mt-10">
        <div className="user-img">
          <img src={myImage4} alt with="90%" />
        </div>
      </section>
    </div>
  );
};

export default Index;
