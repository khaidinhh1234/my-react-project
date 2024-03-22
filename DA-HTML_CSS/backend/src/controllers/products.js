import Product from "../models/Product";
import { StatusCodes } from "http-status-codes";
export const create = async (req, res) => {
  try {
    const data = await Product.insertMany(req.body);
    console.log(data);
    return res.status(StatusCodes.CREATED).json(data);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await Product.find({});
    if (data.length == 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: ["không có sản phẩm vào "] });
    }
    return res.status(StatusCodes.OK).json(data);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const getById = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    return res.status(StatusCodes.OK).json(data);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const deleteById = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.OK).json(data);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const updateById = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json(data);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
