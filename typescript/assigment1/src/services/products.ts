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

export const getProduct = async (id: string | number) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deleteProduct = async (id: string | number) => {
  try {
    const response = await instance.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const addProduct = async (product: string) => {
  try {
    const response = await instance.post(`/products`, product);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const updateProduct = async (product: IProduct) => {
  try {
    const response = await instance.put(`/products/${product.id}`, product);
    return response.data;
  } catch (error) {
    return error;
  }
};
