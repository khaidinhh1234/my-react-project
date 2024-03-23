import { IProduct } from "@/interfaces/product";
import { getProduct } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => await getProduct(id as string),
  });
  if (isLoading) return <p>Loading...</p>;
  const listimg = product.gallery;
  console.log(listimg);
  return (
    <>
      {" "}
      <div>
        <section className="review">
          <div className="container">
            <div className="review-info">
              <div className="review-howe">
                <Link to="/" className="review-home__link">
                  Home
                </Link>
                <img
                  src="./public/images/detail/icondau.svg"
                  alt="#"
                  className="review-img"
                />
              </div>
              <div className="review-home">
                <Link to="/shop" className="review-home__link">
                  Shop
                </Link>
                <img
                  src="./public/images/detail/icondau.svg"
                  alt="#"
                  className="review-img"
                />
              </div>
              <div className="review-home">
                <span className="review-home-sofa">Asgaard sofa</span>
              </div>
            </div>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="product-list">
              <div className="product-images">
                <div className="product-images__smail">
                  {listimg.map((item: IProduct, index: number) => (
                    <div className="product-images__smailone" key={index}>
                      <img
                        src={listimg.item}
                        alt="#"
                        className="product-images-size"
                      />
                    </div>
                  ))}
                  {/* <div className="product-images__smailone">
                    <img
                      src="https://picsum.photos/id/453/76/80"
                      alt="#"
                      className="product-images-size"
                    />
                  </div> */}
                  {/* <div className="product-images__smailone">
                    <img
                      src="https://picsum.photos/id/908/76/80"
                      alt="#"
                      className="product-images-size"
                    />
                  </div> */}
                  {/* <div className="product-images__smailone">
                    <img
                      src="https://picsum.photos/id/392/76/80"
                      alt="#"
                      className="product-images-size"
                    />
                  </div> */}
                </div>
                <div className="product-images__big">
                  <img
                    src={product.image}
                    alt="#"
                    width={423}
                    height={500}
                    className="product-images-size"
                  />
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">
                  <h2 className="product-asgaard">{product.name}</h2>
                </div>
                <div className="product-price">
                  <span className="product-price_VND">{product.price}đ</span>
                </div>
                <div className="product-evaluate">
                  <div className="product-evaluate__icon">
                    <img src="./public/images/detail/icon1.svg" alt="#" />
                    <img
                      src="./public/images/detail/icon1.svg"
                      alt="#"
                      className="product-evaluate__img"
                    />
                    <img
                      src="./public/images/detail/icon1.svg"
                      alt="#"
                      className="product-evaluate__img"
                    />
                    <img
                      src="./public/images/detail/icon1.svg"
                      alt="#"
                      className="product-evaluate__img"
                    />
                    <img
                      src="./public/images/detail/icon1.svg"
                      alt="#"
                      className="product-evaluate__img"
                    />
                  </div>
                  <div className="product-evaluate__review">
                    5 Customer Review
                  </div>
                </div>
                <div className="product-des">
                  <p className="product-des__document">
                    Setting the bar as one of the loudest speakers in its class,
                    the Kilburn is a compact, stout-hearted hero with a
                    well-balanced audio which boasts a clear midrange and
                    extended highs for a sound.
                  </p>
                </div>
                <div className="product-size">
                  <div className="product-size__name">
                    <span className="product-size__size">Size</span>
                  </div>
                  <div className="product-size__post">
                    <div className="product-size__item">
                      <a href="#" className="product-size-L">
                        L
                      </a>
                    </div>
                    <div className="product-size__item_XL">
                      <a href="#" className="product-size-XL">
                        XL
                      </a>
                    </div>
                    <div className="product-size__item_XS">
                      <a href="#" className="product-size-XS">
                        XS
                      </a>
                    </div>
                  </div>
                </div>
                {/* End productsize*/}
                <div className="product-color">
                  <div className="product-color__name">
                    <span className="product-color__color">Color</span>
                  </div>
                  <div className="product-color__post">
                    <a href="#">
                      {" "}
                      <span className="product-color__post-buld" />
                    </a>
                    <a href="#">
                      {" "}
                      <span className="product-color__post-black" />
                    </a>
                    <a href="#">
                      {" "}
                      <span className="product-color__post-nau" />
                    </a>
                  </div>
                </div>
                {/* End productcolor*/}
                <div className="product-btn">
                  <div className="product-btn-quanlity">
                    <div className="product-btn-qua_button">-</div>
                    <div className="product-btn-qua_number">1</div>
                    <div className="product-btn-qua_button">+</div>
                  </div>
                  <div className="product-btn-addtocart">
                    <button className="product-btn-button">
                      <a href="cart.html" className="product-btn-link">
                        Add to Cart
                      </a>
                    </button>
                  </div>
                  <div className="product-btn-conmpare">
                    <button className="product-btn-button">
                      <a href="#" className="product-btn-link">
                        +Compare
                      </a>
                    </button>
                  </div>
                </div>{" "}
                {/* End productbtn*/}
                <hr className="product-hr" />
                <div className="product-footer">
                  <div className="product-footer-list">
                    <div className="product-footer--item">
                      <div className="product-footer-title">
                        {" "}
                        <span>SKU</span>
                      </div>
                      <div className="product-footer-title">
                        {" "}
                        <span>Category</span>
                      </div>
                      <div className="product-footer-title">
                        {" "}
                        <span>Tags</span>
                      </div>
                      <div className="product-footer-title">
                        {" "}
                        <span>Share</span>
                      </div>
                    </div>
                    <div className="product-footer-item">
                      <div className="product-footer-title">
                        : <span className="product-footer-sofa"> SS001</span>
                      </div>
                      <div className="product-footer-title">
                        : <span className="product-footer-sofa"> Sofas</span>
                      </div>
                      <div className="product-footer-title">
                        :
                        <span className="product-footer-sofa">
                          {" "}
                          Sofa, Chair, Home, Shop
                        </span>
                      </div>
                      <div className="product-footer-title">
                        :
                        <span className="product-footer-sofa">
                          {" "}
                          <img
                            src="./public/images/detail/icon-f.png"
                            alt="#"
                          />
                        </span>
                        <span className="product-footer-sofa">
                          {" "}
                          <img
                            src="./public/images/detail/icon-i.svg"
                            alt="#"
                          />
                          <span className="product-footer-sofa">
                            {" "}
                            <img
                              src="./public/images/detail/icon-t.svg"
                              alt="#"
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End productFooter*/}
              </div>
            </div>
          </div>
        </section>
        {/* End product*/}
        <div className="container-fluid">
          <hr />
        </div>
        <section className="products-description">
          <div className="container">
            <div className="products-description__list">
              <div className="products-description__item">
                <h3 className="products-description__des">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Description
                  </a>
                </h3>
              </div>
              <div className="products-description__item">
                <span className="products-description__add">
                  {" "}
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Additional Information
                  </a>
                </span>
              </div>
              <div className="products-description__item">
                <span className="products-description__re">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Reviews [5]
                  </a>
                </span>
              </div>
            </div>
            <div className="products-description_main">
              <p className="products-description_excerpt">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p className="products-description_excerpt">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="products-description_footer">
              <img
                src="https://picsum.photos/id/49/605/348"
                alt="#"
                className="products-description_footer_img"
              />
              <img
                src="https://picsum.photos/id/53/605/348"
                alt="#"
                className="products-description_footer_img"
              />
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <hr />
        </div>
        <section className="related">
          <div className="container">
            <div className="related-title">
              <span className="related-title-name">Related Products</span>
            </div>
            <div className="related-list">
              <div className="related-item">
                <div className="related-image">
                  <img
                    src="https://picsum.photos/id/188/300/300"
                    alt="#"
                    className="related__thumbnail"
                  />
                  <span className="related-new">New</span>
                </div>
                <div className="related-info">
                  <h3 className="related__name">
                    <a href="#" className="related__link">
                      Respira
                    </a>
                  </h3>
                  <a href="#" className="related__category">
                    Outdoor bar table and stool
                  </a>
                  <div className="related-price">
                    <span className="related-price__new">5.000.000</span>
                    <del className="related-price__old" />
                  </div>
                </div>
                <div className="related-actions">
                  <button className="btn related-action__quickview">
                    <a href="detail.html" className="related-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn related-action__addtocart">
                    <a href="cart.html" className="related-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="related-actions-more">
                    <span className="related-action__share">Share</span>
                    <span className="related-action__compare">Compare</span>
                    <span className="related-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .related-item*/}
              <div className="related-item">
                <div className="related-image">
                  <img
                    src="https://picsum.photos/id/166/300/300"
                    alt="#"
                    className="related__thumbnail"
                  />
                  <span className="related-sale">-30%</span>
                </div>
                <div className="related-info">
                  <h3 className="related__name">
                    <a href="#" className="related__link">
                      Respira
                    </a>
                  </h3>
                  <a href="#" className="related__category">
                    Outdoor bar table and stool
                  </a>
                  <div className="related-price">
                    <span className="related-price__new">5.000.000</span>
                    <del className="related-price__old" />
                  </div>
                </div>
                <div className="related-actions">
                  <button className="btn related-action__quickview">
                    <a href="detail.html" className="related-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn related-action__addtocart">
                    <a href="cart.html" className="related-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="related-actions-more">
                    <span className="related-action__share">Share</span>
                    <span className="related-action__compare">Compare</span>
                    <span className="related-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .related-item*/}
              <div className="related-item">
                <div className="related-image">
                  <img
                    src="https://picsum.photos/id/345/300/300"
                    alt="#"
                    className="related__thumbnail"
                  />
                  <span className="related-sale">-50%</span>
                </div>
                <div className="related-info">
                  <h3 className="related__name">
                    <a href="#" className="related__link">
                      Respira
                    </a>
                  </h3>
                  <a href="#" className="related__category">
                    Outdoor bar table and stool
                  </a>
                  <div className="related-price">
                    <span className="related-price__new">5.000.000</span>
                    <del className="related-price__old" />
                  </div>
                </div>
                <div className="related-actions">
                  <button className="btn related-action__quickview">
                    <a href="detail.html" className="related-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn related-action__addtocart">
                    <a href="cart.html" className="related-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="related-actions-more">
                    <span className="related-action__share">Share</span>
                    <span className="related-action__compare">Compare</span>
                    <span className="related-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .related-item*/}
              <div className="related-item">
                <div className="related-image">
                  <img
                    src="https://picsum.photos/id/543/300/300"
                    alt="#"
                    className="related__thumbnail"
                  />
                  <span className="related-new">New</span>
                </div>
                <div className="related-info">
                  <h3 className="related__name">
                    <a href="#" className="related__link">
                      Respira
                    </a>
                  </h3>
                  <a href="#" className="related__category">
                    Outdoor bar table and stool
                  </a>
                  <div className="related-price">
                    <span className="related-price__new">5.000.000</span>
                    <del className="related-price__old" />
                  </div>
                </div>
                <div className="related-actions">
                  <button className="btn related-action__quickview">
                    <a href="detail.html" className="related-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn related-action__addtocart">
                    <a href="cart.html" className="related-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="related-actions-more">
                    <span className="related-action__share">Share</span>
                    <span className="related-action__compare">Compare</span>
                    <span className="related-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .related-item*/}
            </div>
            <div className="show">
              <button className="show-btn ">
                {" "}
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#b88e2f" }}
                >
                  Show More
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
