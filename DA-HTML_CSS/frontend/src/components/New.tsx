import { IProduct } from "@/interfaces/product";
import { getAllProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type ProductListProp = {
  featured?: boolean;
};
const New = ({ featured }: ProductListProp) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCTs_KEY"],
    queryFn: getAllProducts,
  });
  const filterredProducts = featured
    ? products?.filter((product: IProduct) => product?.featured == featured)
    : products;

  if (isLoading) return <h3 className="text-center">Loading...</h3>;
  if (isError) return <p>error</p>;
  if (!Array.isArray(products)) {
    return <p> console.error();</p>;
    // const filterProducts = featured?products?.filter(
    //   (product:IProduct)
    // )
  }
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">New</h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              {filterredProducts?.map((product: IProduct, index: number) => {
                return (
                  <div key={index} className="product-item">
                    <div className="product-image">
                      <img
                        src={product?.image}
                        alt="#"
                        className="product__thumbnail"
                      />
                      <span className="product-sale">{product?.discount}%</span>
                    </div>
                    <div className="product-info">
                      <h3 className="product__name">
                        <a href="#" className="product__link">
                          {product.name}
                        </a>
                      </h3>
                      <a href="#" className="product__category">
                        Stylish cafe chair
                      </a>
                      <div className="product-price">
                        <span className="product-price__new">
                          {product?.price -
                            product?.price * (product?.discount / 100)}{" "}
                        </span>
                        <del className="product-price__old">
                          {product?.price}
                        </del>
                      </div>
                    </div>
                    <div className="product-actions">
                      <button className="btn product-action__quickview">
                        <Link
                          to={`/shop/detail/${product._id}`}
                          className="product-action__link"
                        >
                          Quick View
                        </Link>
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
                );
              })}
              {/*End .product-item*/}
            </div>
          </div>
        </div>
      </section>
      {/*End .news*/}
    </>
  );
};

export default New;
