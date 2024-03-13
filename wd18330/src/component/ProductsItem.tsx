import React, { useContext } from "react";
import { ProductsContext } from "../context/products";

const ProductsItem = () => {
  const product = useContext(ProductsContext);
  return <h1>{product.name}</h1>;
};

export default ProductsItem;

//useReducer
