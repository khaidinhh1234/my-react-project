import express, { Router } from "express";
import {
  addProducts,
  deleteProducts,
  getProductById,
  getProducts,
  updateProducts,
} from "../controller/product";

const route = express.Router();
//router
route.get("/", getProducts);
route.get("/products/:id", getProductById);
route.post("/products", addProducts);
route.put("/products/:id", updateProducts);

route.delete("/products/:id", deleteProducts);
export default route;
