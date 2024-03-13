import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsContext } from "./context/products.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsContext.Provider value={{ id: 123, name: "khai", price: 2000 }}>
    <App />
  </ProductsContext.Provider>
);
