import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/products";

const ProductsEdit = ({ onEdit }) => {
  const { id } = useParams();
  const na = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      reset(data);
    })();
  }, [id]);
  const onsubmit = async (data) => {
    onEdit(data);
    na("/admin");
  };
  return (
    <div className="container">
      <h1>Cập Nhật sản phẩm </h1>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="form-control">Tên sản phẩm</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="form-control mt-2 "
            placeholder="Tên sản phẩm"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-danger"> Vui lòng nhập tên sản phẩm </span>
          )}
        </div>
        <div>
          <label htmlFor="form-control">Ảnh sản phẩm</label>
          <input
            {...register("image", { required: true })}
            type="text"
            className="form-control mt-2 "
            placeholder="Ảnh sản phẩm"
          />
          {errors.image && errors.image.type === "required" && (
            <span className="text-danger"> Vui lòng nhập Ảnh sản phẩm </span>
          )}{" "}
        </div>
        <div>
          <label htmlFor="form-control">Giá sản phẩm</label>
          <input
            {...register("price", { required: true })}
            type="number"
            className="form-control mt-2 "
            placeholder="Giá sản phẩm"
          />
          {errors.price && errors.price.type === "required" && (
            <span className="text-danger"> Vui lòng nhập Giá sản phẩm </span>
          )}{" "}
        </div>
        <div>
          <label htmlFor="form-control">Số Lượng sản phẩm</label>
          <input
            {...register("quality")}
            type="number"
            className="form-control mt-2 "
            placeholder="Số Lượng sản phẩm"
          />
        </div>
        <div>
          <label htmlFor="form-control">Mô tả sản phẩm</label>
          <textarea
            {...register("description")}
            className="form-control mt-2 "
            placeholder="mô tả sản phẩm"
            id=""
            cols="150"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2-2">
          Cập Nhật
        </button>
      </form>
    </div>
  );
};

export default ProductsEdit;
