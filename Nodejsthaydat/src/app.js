import express, { response } from "express"; //khởi tạo bằng express
import {
  AddProduct,
  DeleteProduct,
  UpdateProduct,
  getProductById,
  getProducts,
} from "./controllers/product";

const app = express();

//middleware
app.use(express.json());

//router
// "/api/products" = endpoint
//restfull API
//list sanpham
app.get(`/api/products`, getProducts);
//chitietsanpham
app.get(`/api/products/:id`, getProductById);
app.post(`/api/products`, AddProduct);

app.delete(`/api/products/:id`, DeleteProduct);
app.put(`/api/products/:id`, UpdateProduct);

export const viteNodeApp = app;
/* import thêm "type":module; vào file package.json*/
