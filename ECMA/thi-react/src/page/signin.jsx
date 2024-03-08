import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const na = useNavigate();
  const { register, handleSubmit } = useForm();
  const onsubmit = async (user) => {
    try {
      const { data } = await axios.post(`http://localhost:3000/signin`, user);
      localStorage.setItem("user", JSON.stringify(data));
      alert("Đăng Nhập thành công");
      na("/admin");
    } catch (error) {
      console.log(error.response.date);
      alert(error.response.data);
    }
  };
  return (
    <div className="container">
      <h1>Đăng Nhập </h1>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="form-control">Tài khoản</label>
          <input
            {...register("email")}
            type="email"
            className="form-control mt-2 "
            placeholder="email.com"
          />
        </div>
        <div>
          <label htmlFor="form-control">Mật khẩu</label>
          <input
            {...register("password")}
            type="password"
            className="form-control mt-2 "
            placeholder="****"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
};

export default Signin;
