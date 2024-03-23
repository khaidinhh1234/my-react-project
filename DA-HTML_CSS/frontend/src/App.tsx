import { Routes, Route } from "react-router-dom";
import HomePage1 from "./pages/user/home";
import ShopPage from "./pages/user/shop";
import AboutPage from "./pages/user/about";
import ContectPage from "./pages/user/contect";
import LayoutWebsite from "./layout/LayoutWebsite";
import DetailPage from "./pages/user/detail";
import LayoutAdmin from "./layout/Layoutadmin";
import ProductsList from "./pages/admin/product";
import ProductsAdd from "./pages/admin/product/add";
import ProductsEdit from "./pages/admin/product/edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage1 />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/shop/detail/:id" element={<DetailPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContectPage />}></Route>
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<ProductsList />}></Route>
          <Route path="/admin/products/add" element={<ProductsAdd />}></Route>

          <Route
            path="/admin/products/:id/edit"
            element={<ProductsEdit />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
