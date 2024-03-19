import product from "../model/Product";
export const getProducts = async (req, res) => {
  try {
    const data = await product.find();
    if (data.length < 0) {
      return res.status(404).json({ message: "NO products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //   try {
  //     const response = await fetch(`${url}`);
  //     const data = await response.json();
  //     res.json(data);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
};

export const getProductById = async (req, res) => {
  try {
    const data = await product.findOne({ _id: req.params.id });
    if (data.length < 0) {
      return res.status(404).json({ message: "NO products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
  try {
    const data = await product.findOneAndDelete({ _id: req.params.id });
    if (data.length < 0) {
      return res.status(404).json({ message: "NO products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const data = await product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (data.length < 0) {
      return res.status(404).json({ message: "NO products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
