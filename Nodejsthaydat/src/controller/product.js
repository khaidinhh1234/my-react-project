import product from "../model/Product";
export const getProducts = async (req, res) => {
  console.log("products");
  //   try {
  //     const response = await fetch(`${url}`);
  //     const data = await response.json();
  //     res.json(data);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
};

export const getProductById = async (req, res) => {
  console.log(req.params.id);
  console.log("products"); //req.params.slug , req.query
};

export const addProducts = async (req, res) => {
  console.log(req.body);
  try {
    const data = await product(req.body).save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteProducts = async (req, res) => {
  console.log("products");
};
export const updateProducts = async (req, res) => {
  const id = req.params.id;
  console.log("products");
};
