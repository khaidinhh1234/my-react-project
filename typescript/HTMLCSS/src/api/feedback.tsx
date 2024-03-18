import axios from "axios";
import instance from "./config";

export const getFeedBack = async () => {
  try {
    const { data } = await axios
      .create({ baseURL: "http://localhost:3000" })
      .get("/feedbacks");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFeedBackById = async (id: string) => {
  try {
    const { data } = await instance.get(`/feedbacks/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFeedBackById = async (id: string) => {
  try {
    const { data } = await instance.delete(`/feedbacks/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addFeedBack = async (newfeedback: string) => {
  try {
    const { data } = await instance.post(`/feedbacks`, newfeedback);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateFeedBack = async (feedback: any) => {
  try {
    const { data } = await instance.put(`/feedbacks/${feedback.id}`, feedback);
    return data;
  } catch (error) {
    console.log(error);
  }
};
