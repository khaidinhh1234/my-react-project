import instance from "@/config/axios";

export const getAllProducts = async () => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id: string | number) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
