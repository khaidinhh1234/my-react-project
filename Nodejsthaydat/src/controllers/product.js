export const getProducts = async (req, res) => {
  console.log(req);
  //request.url , request.method , request.handle
  try {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
export const getProductById = async (req, res) => {
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
};

export const AddProduct = async (req, res) => {
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
};
export const DeleteProduct = async (req, res) => {
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
};
export const UpdateProduct = async (req, res) => {
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
};
