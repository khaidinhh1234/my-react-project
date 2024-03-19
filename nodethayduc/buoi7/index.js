import express from "express";
import "dotenv/config";
import connectMongoDB from "./connect.js";
import routeProducts from "./routes/products.js";
// Phân tích request từ form
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI || null;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
connectMongoDB(uri);
app.use("api/vi/products", routeProducts);
app.listen(3000, () => {
  console.log("Khởi tạo sever thành công");
});
