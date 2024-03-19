import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Logo } from "./img/image";

function App() {
  return (
    <>
      {" "}
      <div>
        <Header></Header>
        <section className="banner">
          <img src={Logo} alt="#" className="banner__img" />
        </section>
        {/*End .banner*/}
        <section className="news">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__title">New</h2>
            </div>
            <div className="section-body">
              <div className="product-list">
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/101/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-sale">-30%</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Syltherine
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Stylish cafe chair
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">2.500.000đ</span>
                      <del className="product-price__old">3.500.000đ</del>
                    </div>
                  </div>
                  <div className="product-actions">
                    <button className="btn product-action__quickview">
                      <a href="detail.html" className="product-action__link">
                        Quick View
                      </a>
                    </button>
                    <button className="btn product-action__addtocart">
                      <a href="cart.html" className="product-action__link">
                        Add to Cart
                      </a>
                    </button>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/133/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-new">New</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Leviosa
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Stylish cafe chair
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">2.500.000đ</span>
                      <del className="product-price__old" />
                    </div>
                  </div>
                  <div className="product-actions">
                    <button className="btn product-action__quickview">
                      <a href="detail.html" className="product-action__link">
                        Quick View
                      </a>
                    </button>
                    <button className="btn product-action__addtocart">
                      <a href="cart.html" className="product-action__link">
                        Add to Cart
                      </a>
                    </button>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/123/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-sale">-50%</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Lolito
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Luxury big sofa
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">7.000.000đ</span>
                      <del className="product-price__old">14.000.000đ</del>
                    </div>
                  </div>
                  <div className="product-actions">
                    <button className="btn product-action__quickview">
                      <a href="detail.html" className="product-action__link">
                        Quick View
                      </a>
                    </button>
                    <button className="btn product-action__addtocart">
                      <a href="cart.html" className="product-action__link">
                        Add to Cart
                      </a>
                    </button>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/312/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-new">New</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Respira
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Outdoor bar table and stool
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">5.000.000</span>
                      <del className="product-price__old" />
                    </div>
                  </div>
                  <div className="product-actions">
                    <button className="btn product-action__quickview">
                      <a href="detail.html" className="product-action__link">
                        Quick View
                      </a>
                    </button>
                    <button className="btn product-action__addtocart">
                      <a href="cart.html" className="product-action__link">
                        Add to Cart
                      </a>
                    </button>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr />
        </div>
        {/*End .news*/}
        <section className="shop">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__title">Shop</h2>
            </div>
            <div className="section-body">
              <div className="shops">
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/12/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/13/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/14/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/15/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End .shop*/}
        <section className="blog">
          <div className="container">
            <div className="section-heading section-blog-heading">
              <h2 className="section-heading__title">Blog</h2>
            </div>
            <div className="section-body">
              <div className="post-list">
                <div className="post-item">
                  <div className="post-image">
                    <a href="#">
                      <img
                        src="https://picsum.photos/id/16/665/250"
                        alt="#"
                        className="post__thumbnail"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h3 className="post__title">
                      <a href="#" className="post__link">
                        THE ULTIMATE SOFA BUYING GUIDE
                      </a>
                    </h3>
                    <p className="post__excerpt">
                      The versatility of our living space is more crucial than
                      ever. But buying a sofa might be a difficult undertaking.
                      Your needs and the size of your living area will determine
                      everything, However, don’t worry, were are here to help
                      you
                    </p>
                    <a href="#" className="post__readmore">
                      Readmore
                    </a>
                  </div>
                </div>
                {/*End .post-item*/}
                <div className="post-item">
                  <div className="post-image">
                    <a href="#">
                      <img
                        src="https://picsum.photos/id/17/665/250"
                        alt="#"
                        className="post__thumbnail"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h3 className="post__title">
                      <a href="#" className="post__link">
                        THE ULTIMATE SOFA BUYING GUIDE
                      </a>
                    </h3>
                    <p className="post__excerpt">
                      The versatility of our living space is more crucial than
                      ever. But buying a sofa might be a difficult undertaking.
                      Your needs and the size of your living area will determine
                      everything, However, don’t worry, were are here to help
                      you
                    </p>
                    <a href="#" className="post__readmore">
                      Readmore
                    </a>
                  </div>
                </div>
                {/*End .post-item*/}
              </div>
            </div>
          </div>
        </section>
        {/*End .blog*/}
        <section className="services">
          <div className="container-fluid">
            <div className="service-list">
              <div className="service-item">
                <img
                  src="./public/images/sevicse 1.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img
                  src="./public/images/secvise 2.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img
                  src="./public/images/secvise 3.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img
                  src="./public/images/secvise 4.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
            </div>
          </div>
        </section>
        {/*End .services*/}
        <footer className="footer">
          <div className="container">
            <div className="footer-list">
              <div className="footer-item">
                <img src="./public/images/logofooter.svg" alt="#" />
                <p className="footer__address">
                  400 University Drive Suite 200 Coral Gables, FL 33134 USA
                </p>
              </div>
              <div className="footer-nav">
                <div className="footer-item">
                  <h2 className="footer__title">Links</h2>
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Home
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Shop
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Blog
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-item">
                  <h2 className="footer__title">Help</h2>
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Payment Options
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Returns
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Privacy Policies
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-item">
                <h2 className="footer__title">Newsletter</h2>
                <form className="newsletter">
                  <input
                    type="text"
                    className="newsletter__input"
                    placeholder="Enter Your Email Address"
                  />
                  <button className="newsletter__btn">Subscribe</button>
                </form>
              </div>
            </div>
            <p className="copyright">2023 furino. All rights reverved</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;
