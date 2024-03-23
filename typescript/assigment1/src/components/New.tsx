import { IProduct } from "@/interfaces/product";
import { deleteProduct, getAllProducts } from "@/services/products";
import {
  infiniteQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const New = () => {
  const queryClient = useQueryClient();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: getAllProducts,
  });

  // //Xóa
  const { mutate: remove } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });

  // toast.success("Xóa sản phẩm thành công");
  //   toast.error("Lỗi xóa sản phẩm thành công");
  // }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error</p>;

  return (
    <>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            {" "}
            <Link to="/addproduct" className="btn btn-info ">
              Thêm{" "}
            </Link>
          </div>
          <div className="section-body">
            <div className="product-list">
              {products?.map((product: IProduct, index: number) => {
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
                        {product.description}
                      </a>
                      <div className="product-price">
                        <span className="product-price__new">
                          {product?.price -
                            product?.price * (product?.discount / 100)}
                        </span>
                        <del className="product-price__old">
                          {product?.price}
                        </del>
                      </div>
                    </div>
                    <div className="product-actions">
                      <button
                        className="btn product-actions__quickview"
                        onClick={() => remove(product.id!)}
                      >
                        <Link to="#" className="product-actions__link bca">
                          Xóa Sản Phẩm
                        </Link>
                      </button>
                      <button className="btn product-actions__addtocart ">
                        <Link
                          to={`/editproduct/${product.id!}`}
                          className="product-actions__link abc"
                        >
                          Sửa Sản Phẩm
                        </Link>
                      </button>
                      <div className="product-actions-more">
                        <span className="product-actions__share">Share</span>
                        <span className="product-actions__compare">
                          Compare
                        </span>
                        <span className="product-actions__like">Like</span>
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
