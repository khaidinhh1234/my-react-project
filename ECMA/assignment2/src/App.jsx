//Định nghĩa Router
import { useEffect, useRef, useState } from "react";

import { Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import SignIn from "./pages/Sig/signin";
import SignUp from "./pages/Sig/signup";
// import { Dangkyuser, Dangnhapuser } from "./api/users";
import LayoutAdmin from "./pages/admin/layoutadmin";
import SanPhamList from "./pages/admin/sanpham/sanpham";
import SanPhamAdd from "./pages/admin/sanpham/sanpham-add";
import SanPhamEdit from "./pages/admin/sanpham/sanpham-edit";
import {
  addSanpham,
  getSanphams,
  removeSanphamById,
  updateSanpham,
} from "./api/sanpham";
import LoaiSanpham from "./pages/admin/loaisp/loaisp";
import TrangChu from "./pages/admin/trangchu";
import {
  addLoaiSanPham,
  deleteLoaiSanPhamById,
  getLoaiSanPhams,
  updateLoaiSanPham,
} from "./api/loaisp";
import LoaiSanPhamAdd from "./pages/admin/loaisp/loaisp-add";
import LoaiSanPhamEdit from "./pages/admin/loaisp/loaisp-edit";

import ProtectedRoute from "./pages/admin/protectedRoute";
import Home from "./pages/admin/home";
import Index from "./pages/user";
import Chitietproducts from "./pages/user/ctproduct";

function App() {
  const [sanphams, setSanPhams] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getSanphams();
      setSanPhams(data);
    })();
  }, []);
  const AddSanPham = async (sp) => {
    try {
      const data = await addSanpham(sp);
      console.log(data);
      toast.success("Thêm phim thành công ");
      setSanPhams([...sanphams, data]);
    } catch (error) {
      toast.error("Lỗi thêm phim ");
    }
  };
  const deleteSanPham = async (id) => {
    const confirm = window.confirm("Bạn có chăc chắn muốn xóa không !");
    if (confirm)
      try {
        const data = await removeSanphamById(id);
        // console.log(data)
        toast.success("Xoá Phim Thành Công ");
        setSanPhams(sanphams.filter((sanpham) => sanpham.id !== id));
      } catch (error) {
        toast.error("Lỗi Xoá Phim ");
      }
  };
  const EditSanPham = async (sp) => {
    try {
      const data = await updateSanpham(sp);
      toast.success("Cập Nhật Phim thành công");
      // console.log(data)
      setSanPhams(sanphams.map((spold) => (spold.id === sp.id ? sp : spold)));
    } catch (error) {
      toast.error("Lỗi Cập Nhật");
    }
  };
  const [loaisps, setLoaisp] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getLoaiSanPhams();
      setLoaisp(data);
    })();
  }, []);
  const DeleteLoaiSanPham = async (id) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không !");
    if (confirm)
      try {
        const data = await deleteLoaiSanPhamById(id);
        setLoaisp(loaisps.filter((loaisp) => loaisp.id !== id));
        toast.success(" Xóa Thể Lọai Phim Thành Công ");
      } catch (error) {
        toast.error("Lỗi Xóa");
      }
  };
  const AddLoaiSanPham = async (loaisp) => {
    try {
      const data = await addLoaiSanPham(loaisp);
      // console.log(data)
      toast.success("Thêm Thể Loại Phim Thành Công ");
      setLoaisp([...loaisps, loaisp]);
    } catch (error) {
      toast.error("Lỗi Thêm ");
    }
  };
  const EditLoaiSanPham = async (loaisp) => {
    try {
      const data = await updateLoaiSanPham(loaisp);
      // console.log(data)
      toast.success("Cập Nhật Phim Thành Công");
      setLoaisp(loaisps.map((item) => (item.id === loaisp.id ? loaisp : item)));
    } catch (error) {
      toast.error("Lỗi Cập Nhật");
    }
  };

  //  const [usernameRef] = useRef();

  return (
    <>
      <Routes>
        <Route path="/" element={<Index sanphams={sanphams} />} />
        <Route path="/ctproducts/:id" element={<Chitietproducts />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <LayoutAdmin />
            </ProtectedRoute>
          }
        >
          <Route path="/admin" element={<TrangChu />}></Route>

          <Route
            path="/admin/sanphams"
            element={
              <SanPhamList sanphams={sanphams} deleteSP={deleteSanPham} />
            }
          ></Route>
          <Route
            path="/admin/sanphams/add"
            element={<SanPhamAdd onAdd={AddSanPham} />}
          ></Route>
          <Route
            path="/admin/sanphams/edit/:id"
            element={<SanPhamEdit onEdit={EditSanPham} />}
          ></Route>

          <Route
            path="/admin/loaisps"
            element={
              <LoaiSanpham loaisps={loaisps} Xoalsp={DeleteLoaiSanPham} />
            }
          ></Route>
          <Route
            path="/admin/loaisps/add"
            element={<LoaiSanPhamAdd onAdd={AddLoaiSanPham} />}
          ></Route>
          <Route
            path="/admin/loaisps/edit/:id"
            element={<LoaiSanPhamEdit onEdit={EditLoaiSanPham} />}
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
export default App;
