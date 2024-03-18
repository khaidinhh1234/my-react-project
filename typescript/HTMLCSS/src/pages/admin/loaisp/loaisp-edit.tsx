import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { getLoaiSanPhamById } from "../../../api/loaisp";
import { useEffect } from "react";

const LoaiSanPhamEdit = ({ onEdit }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const { id }: any = useParams();
  useEffect(() => {
    (async () => {
      const data = await getLoaiSanPhamById(id);
      reset(data);
    })();
  }, [id]);
  const onSubmit = (data: any) => {
    onEdit(data);
    navigate("/admin/loaisps");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Cập Nhật Thể Loại Phim </h1>
          <div className="btn-toolbar mb-2 mb-md-0"></div>
        </div>
        <div></div>

        <div className="mb-3">
          <label htmlFor="loaispsName" className="form-label">
            {" "}
            Thể Loại
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="form-control"
            id="loaispsName"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="tw-text-red-600">Vui lòng nhập thể loại </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Cập Nhật
        </button>
      </form>
    </div>
  );
};

export default LoaiSanPhamEdit;
