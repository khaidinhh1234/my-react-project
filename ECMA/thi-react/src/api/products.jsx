import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/products`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
export const deleteProductById = async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const addProducts = async (pro) => {
  try {
    const { data } = await axios.post(`http://localhost:3000/products`, pro);
    return data;
  } catch (error) {
    return error;
  }
};
export const updateProducts = async (pro) => {
  try {
    const { data } = await axios.post(
      `http://localhost:3000/products/${pro.id}`,
      pro
    );
    return data;
  } catch (error) {
    return error;
  }
};
