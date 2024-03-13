import { useState } from "react";
import "./App.css";
import ProductsItem from "./component/ProductsItem";

function App() {
  const [color, Setcolor] = useState("red");

  return (
    <>
      <div
        style={{ width: 200, height: 200, backgroundColor: color }}
        onClick={() => Setcolor(color === "blue" ? "red" : "blue")}
      ></div>
      <ProductsItem></ProductsItem>
    </>
  );
}

export default App;
