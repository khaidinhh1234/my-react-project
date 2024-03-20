import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import bcryptjs from "bcryptjs";
const signupSchema = Joi.object({
  name: Joi.string().required().min(3).max(30).messages({
    "any.required": "Name trường bắt buộc",
    "string.empty": "Name không được bỏ trống",
    "string.min": "Name phải có ít nhất (#limit) ký tự ",
    "string.max": "Name không vượt quá  (#limit) ký tự ",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ",
    "any.required": "Email là bắt buộc ",
    "string.empty": "Email không được bỏ trống ",
  }),
  password: Joi.string().min(6).max(30).required().messages({
    "any.required": "Password là bắt buộc",
    "string.empty": "Password không được bỏ trống",
    "string.min": "Password có độ dài là {#limit} ký tự",
    "string.max": "Password không vượt quá  (#limit) ký tự ",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref(`password`)).messages({
    "any.required": "Comfirm là bắt buộc ",
    "any.only": "Password không khớp ",
    "string.empty": "Confirm không được để trống",
  }),
  avatar: Joi.string().uri().messages({
    "string.uri": "Avatar phải là đường dẫn hợp",
  }),
});

export const signup = async (req, res) => {
  const { email, name, password, avatar } = req.body;
  console.log(req.body);
  const { error } = signupSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((item) => item.message);
    return res.status(StatusCodes.BAD_REQUEST).json({ messages });
  }

  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(400).json({ message: ["Email đã tồn tại "] });
  }
  const hashedPassword = await bcryptjs.hash(password, 10);
  const role = (await User.countDocuments({})) === 0 ? "admin" : "user";
  const user = await User.create({
    ...req.body,
    password: hashedPassword,
    role,
  });

  data.password = undefined;

  return res.status(StatusCodes.CREATED).json({
    data,
    message: ["bạn đã đăng ký thành công"],
  });
};
export const signin = async (req, res) => {};
export const logout = async (req, res) => {};
