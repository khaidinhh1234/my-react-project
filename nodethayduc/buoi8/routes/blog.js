import express from "express";
import Blogscontroller from "../controllers/Blogscontroller.js";

// import Blogs from "../schemas/blogs.js";

const routeBlogs = express.Router();

// Middleware: cái thằng mà nó sẽ đứng ở giữa:
//              yêu cầu ng dùng gửi lên và phía server xử lý
// const timelog = (req, res, next) => {
//   console.log("Time: " + Date.now());
//   next();
// };
// routeBlogs.use(timelog);

// Định nghĩa các đường dẫn
const baseUrl = "/";

// Danh sách + tìm kiếm
routeBlogs.get(baseUrl, Blogscontroller.index);

// Xem chi tiết
routeBlogs.get(baseUrl + ":id", Blogscontroller.show);

// Thêm mới
routeBlogs.post(baseUrl, Blogscontroller.add);

// Cập nhật
routeBlogs.put(baseUrl + ":id", Blogscontroller.update);

// Xóa
routeBlogs.delete(baseUrl + ":id", Blogscontroller.delete);

// module.exports = routeBlogs;

export default routeBlogs;
