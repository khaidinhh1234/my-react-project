import express from "express";
import "dotenv/config";
import connectMongoDB from "./connect.js";
import routeBlogs from "./routes/blog.js";
// Phân tích request từ form
import bodyParser from "body-parser";
import route from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const uri = process.env.MONGO_URI || null;
connectMongoDB(uri);
route(app);
app.listen(port, () => {
  console.log("Khởi tạo sever thành công");
});
