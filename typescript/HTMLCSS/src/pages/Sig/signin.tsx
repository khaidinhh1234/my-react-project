import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  // const [user ,setUsers] = useLocalStorage("user",{})
  const navigate = useNavigate();
  const onSubmit = async (user: any) => {
    try {
      const { data }: any = await axios.post(
        "http://localhost:3000/signin",
        user
      );
      // console.log(response)
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("thanh cong", data);
      navigate("/admin");
      // setUsers(data)
    } catch (error: any) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      <main className="form-signin w-100 m-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal tw-mt-32">Đăng Nhập Tài Khoản</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              {...register("email")}
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Địa Chỉ Email</label>
          </div>
          <div className="form-floating ">
            <input
              type="password"
              className="form-control"
              {...register("password")}
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
            Đăng Nhập
          </button>
          <Link
            to={"/signup"}
            className="btn btn-info w-100 py-2"
            type="submit"
          >
            Đăng Ký
          </Link>
          <p className="mt-5 mb-3 text-body-secondary">© 2024–2025</p>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
