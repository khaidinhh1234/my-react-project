import express from "express";
import Product from "../schemas/product.js";

const routerProducts = express.Router();

// Middleware: cái thằng mà nó sẽ đứng ở giữa:
//              yêu cầu ng dùng gửi lên và phía server xử lý
const timelog = (req, res, next) => {
  console.log("Time: " + Date.now());
  next();
};
routerProducts.use(timelog);

// Định nghĩa các đường dẫn
const baseUrl = "/";

// Danh sách + tìm kiếm
routerProducts.get(baseUrl, async (req, res) => {
  try {
    await client.connect();

    const result = await Product.find();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});

// Xem chi tiết
routerProducts.get(baseUrl + ":id", async (req, res) => {
  try {
    await client.connect();

    const result = await Product.findId(req.params.id);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});

// Thêm mới
routerProducts.post(baseUrl, async (req, res) => {
  try {
    await client.connect();

    const result = await Product.create();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});

// Cập nhật
routerProducts.put(baseUrl + ":id", async (req, res) => {
  try {
    await client.connect();

    const result = await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});

// Xóa
routerProducts.delete(baseUrl + ":id", async (req, res) => {
  try {
    await client.connect();

    const result = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});

// module.exports = routerProducts;

export default routerProducts;
