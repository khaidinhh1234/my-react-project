import { Routes, Route } from "react-router-dom";
import HomePage1 from "./pages/home";
import ShopPage from "./pages/shop";
import AboutPage from "./pages/about";
import ContectPage from "./pages/contect";
import LayoutWebsite from "./components/LayoutWebsite";
import DetailPage from "./pages/detail";

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
      </Routes>
    </>
  );
}
export default App;
