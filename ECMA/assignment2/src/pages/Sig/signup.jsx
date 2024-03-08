import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (users) => {
    try {
      await axios.post("http://localhost:3000/signup", users);
      toast.success("Bạn đã đăng ký tài khoản thành công");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div>
      <main className="form-signin w-100 m-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal tw-mt-32">Đăng Ký Tài Khoản</h1>
          <div className="form-floating">
            <input
              type="email"
              {...register("email")}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Địa Chỉ Email</label>
          </div>
          <div className="form-floating ">
            <input
              type="password"
              {...register("password")}
              className="form-control"
              id="floatingPassword"
              placeholder="Mật Khẩu"
            />
            <label htmlFor="floatingPassword">Mật Khẩu</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ghi Nhớ
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2 tw-mb-2" type="submit">
            Đăng Ký
          </button>
          <Link
            to={`/signin`}
            className="btn btn-info w-100 py-2"
            type="submit"
          >
            Đăng Nhập
          </Link>
          <p className="mt-5 mb-3 text-body-secondary">© 2024–2025</p>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
