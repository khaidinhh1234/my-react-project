import { Routes, Route } from "react-router-dom";
import HomePage1 from "@/pages/home";
import AddProducts from "./pages/addproduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage1 />}></Route>
        <Route path="/addproduct" element={<AddProducts />}></Route>
      </Routes>
    </>
  );
}
export default App;
