import instance from "@/config/axios";
import { IProduct } from "@/interfaces/product";
import { updateProduct } from "@/services/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Edit = () => {
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: async () => {
      const { data } = await instance.get(`products/${id}`);
      reset(data);
      return data;
    },
  });
  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });
  const OnSubmit = async (data: IProduct) => {
    try {
      await mutation.mutateAsync(data);
      toast.success("Cập nhật sản phẩm thành công ");
    } catch (error) {
      toast.error("Lỗi cập nhật sản phẩm thành công ");
    }
  };

  return (
    <div className="container mt-2 ">
      <div className="   border bg-info-subtle text-info-emphasis   rounded-pill  d-flex justify-content-center ">
        <form
          className="w-75     p-4 m-3  d-grid    "
          onSubmit={handleSubmit(OnSubmit)}
        >
          {" "}
          <div>
            <h1 className="text-center ">Cập nhật sản phẩm </h1>
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
                {...register("description")}
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
          <div className="d-flex justify-content-center  gap-2 ">
            <button type="submit" className="btn btn-primary w-25">
              Cập nhật
            </button>
            <button className="btn btn-primary w-25" type="button">
              <Link to="/" className="text-light text-decoration-none">
                Danh sách
              </Link>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Edit;
