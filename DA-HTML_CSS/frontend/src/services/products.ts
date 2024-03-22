import instance from "@/config/axios";
import { IProduct } from "@/interfaces/product";

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
