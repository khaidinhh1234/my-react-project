import express, { response } from "express"; //khởi tạo bằng express

const app = express();

//middleware
app.use(express.json());

//router
// "/api/products" = endpoint
//restfull API
//list sanpham
app.get(`/api/products`, async (req, res) => {
  console.log(req);
  //request.url , request.method , request.handle
  try {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
//chitietsanpham
app.get(`/api/products/:id`, async (req, res) => {
  //request.url , request.method , request.handle
  try {
    const response = await fetch(
      `http://localhost:3000/products/${req.params.id}`
    );
    const data = await response.json();
    //tra ve client
    res.json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
app.post(`/api/products`, async (req, res) => {
  try {
    const response = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    //tra ve client
    res.status(201).json({
      message: " thêm sản phẩm thành công",
      data,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

app.delete(`/api/products/:id`, async (req, res) => {
  //request.url , request.method , request.handle
  try {
    const response = await fetch(
      `http://localhost:3000/products/${req.params.id}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    //tra ve client
    res.status(200).json({
      message: " Xóa sản phẩm thành công",
      data,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
app.put(`/api/products/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      "Content-Type": "application/json",
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    //tra ve client
    res.status(201).json({
      message: " Cập nhật sản phẩm thành công",
      data,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

export const viteNodeApp = app;
/* import thêm "type":module; vào file package.json*/
