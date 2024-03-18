import axios from "axios";
import instance from "./config";

export const Dangkyuser = async (users: string) => {
  try {
    const { data } = await axios.post("http:localhost:3000/signup", users);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const Dangnhapuser = async (users: string) => {
  try {
    const { data } = await instance.post("signin", users);
    return data;
  } catch (error) {
    console.log(error);
  }
};
