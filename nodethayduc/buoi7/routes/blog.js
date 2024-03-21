import express from "express";
import Blogs from "../schemas/blogs.js";

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
routeBlogs.get(baseUrl, async (req, res) => {
  try {
    // await client.connect();
    const data = await Blogs.find(req.query);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Xem chi tiết
routeBlogs.get(baseUrl + ":id", async (req, res) => {
  try {
    const result = await Blogs.findById(req.params.id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Thêm mới
routeBlogs.post(baseUrl, async (req, res) => {
  try {
    // await client.connect();
    const data = await Blogs.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Cập nhật
routeBlogs.put(baseUrl + ":id", async (req, res) => {
  try {
    const result = await Blogs.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Xóa
routeBlogs.delete(baseUrl + ":id", async (req, res) => {
  try {
    const result = await Blogs.findByIdAndDelete(req.params.id);

    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// module.exports = routeBlogs;

export default routeBlogs;
