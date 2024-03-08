import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SanPhamAdd = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    onAdd(data);
    navigate("/admin/sanphams");
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Thêm Phim Mới</h1>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="samphamsName" className="form-label tw-mr-4">
            Tên Phim
          </label>
          <input
            type="text"
            {...register("name", { required: true, minLength: 3 })}
            className="form-control"
            id="sanphamsName"
            placeholder="Tên Phim"
          />{" "}
          {errors.name && errors.name.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập tên phim</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span className="tw-text-red-500">Tối thiểu 3 kí tự</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="samphamsImage" className="form-label">
            Ảnh
          </label>
          <input
            type="text"
            {...register("image", { required: true })}
            className="form-control"
            id="sanphamsImage"
            placeholder="Hình ảnh"
          />
          {errors.image && errors.image.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập Image</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="samphamsTl" className="form-label">
            Thời Lượng Phim
          </label>
          <input
            type="number"
            {...register("tl", { required: true })}
            className="form-control"
            id="sanphamsTl"
            placeholder="Thời Lượng Phim "
          />
          {errors.tl && errors.tl.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="samphamsDateph" className="form-label">
            Ngày Chiếu
          </label>
          <input
            type="date"
            {...register("dateph", { required: true })}
            className="form-control"
            id="sanphamsDateph"
          />
          {errors.dateph && errors.dateph.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>
    </div>
  );
};

export default SanPhamAdd;
