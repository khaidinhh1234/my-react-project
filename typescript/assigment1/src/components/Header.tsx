import { getAllProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {" "}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="header__logo">
              <img src="src/assets/images/logo.svg" alt="#" />
            </a>
            <div className="button-mobile">
              <div className="button-mobile-bar1" />
              <div className="button-mobile-bar2" />
              <div className="button-mobile-bar3" />
            </div>
            <nav className="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <a href="./index.html" className="main-menu__link">
                    Home
                  </a>
                </li>
                <li className="main-menu__item">
                  <a href="./shop.html" className="main-menu__link">
                    Shop
                  </a>
                </li>
                <li className="main-menu__item">
                  <a href="#" className="main-menu__link">
                    About
                  </a>
                </li>
                <li className="main-menu__item">
                  <a href="#" className="main-menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-items">
              <div className="header-item-user">
                <a href="login.html">
                  <img src="./public/images/img1.svg" />
                </a>
              </div>
              <div className="header-item-user">
                <span>
                  <a href="#">
                    <img src="./public/images/img2.svg" />
                  </a>
                </span>
              </div>
              <div className="header-item-user">
                <span>
                  <a href="#">
                    <img src="./public/images/img3.svg" />
                  </a>
                </span>
              </div>
              <div className="header-item-user">
                <a href="./cart.html">
                  <img src="./public/images/img4.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;