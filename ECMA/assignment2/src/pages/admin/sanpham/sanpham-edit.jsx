import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getSanphamById } from "../../../api/sanpham";

const SanPhamEdit = ({ onEdit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log({id})
  useEffect(() => {
    (async () => {
      const data = await getSanphamById(id);
      // console.log(data)
      reset(data);
    })();
  }, [id]);
  const onSubmit = (data) => {
    onEdit(data);
    // console.log(data)
    navigate("/admin/sanphams");
  };
  return (
    <div>
      {" "}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Update Phim Mới</h1>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <div className="mb-3">
          <label htmlFor="samphamsName" className="form-label">
            {" "}
            Tên Phim{" "}
          </label>
          <input
            type="text"
            {...register("name", { required: true, minLength: 3 })}
            className="form-control"
            id="sanphamsName"
          />{" "}
          {errors.name && errors.name.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập tên phim </span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span className="tw-text-red-600">Tối thiểu 3 kí tự</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="samphamsImage" className="form-label">
            {" "}
            Ảnh{" "}
          </label>
          <input
            type="text"
            {...register("image", { required: true })}
            className="form-control"
            id="sanphamsImage"
          />{" "}
          {errors.image && errors.image.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="samphamsTl" className="form-label">
            Thời Lượng Phim{" "}
          </label>
          <input
            type="number"
            {...register("tl", { required: true })}
            className="form-control"
            id="sanphamsTl"
          />
          {errors.tl && errors.tl.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="samphamsDateph" className="form-label">
            {" "}
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
          Cập Nhật
        </button>
      </form>
    </div>
  );
};

export default SanPhamEdit;
