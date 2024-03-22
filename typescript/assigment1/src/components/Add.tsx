import { IProduct } from "@/interfaces/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useForm } from "react-hook-form";
const Add = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        product
      );
      return data;
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["PRODUCT_KEY"],
        });
      };
    },
  });
  const onSubmit = (product: IProduct) => {
    mutation.mutate(product);
    console.log(product);
  };
  return (
    <div className="container mt-2 ">
      <div className="   border bg-info-subtle text-info-emphasis   rounded-pill  d-flex justify-content-center ">
        <form
          className="w-75     p-4 m-3  d-grid    "
          onSubmit={handleSubmit(onSubmit)}
        >
          {" "}
          <div>
            <h1 className="text-center ">Thêm sản phẩm </h1>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Tên sản phẩm
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputName"
                {...register("name")}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputImage" className="col-sm-2 col-form-label">
              Hình ảnh
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputImage"
                {...register("image")}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputprice" className="col-sm-2 col-form-label">
              Giá sản phẩm
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputprice"
                {...register("price")}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputquality" className="col-sm-2 col-form-label">
              Số lượng
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputquality"
                {...register("quality")}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputdescription"
              className="col-sm-2 col-form-label"
            >
              Mô tả
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="description"
                cols="150"
                rows="10"
                {...register("desciption")}
              ></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputdiscount" className="col-sm-2 col-form-label">
              Giảm giá
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputdiscount"
                {...register("discount")}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary  ">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
