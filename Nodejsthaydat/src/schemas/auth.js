import Joi from "joi";
export const registerSchema = Joi.object({
  username: Joi.string().required().trim().message({
    "any.required": "Username bắt buộc",
    "string.empty": "Username không được bỏ trống",
    "string.trim": "Username không được để khoảng trắng",
  }),
  email: Joi.email().string().required().message({
    "string.email": "Email không hợp lệ",
    "any.required": "Email là bắt buộc ",
    "string empty": "Email không được bỏ trống ",
  }),
  password: Joi.string().min(6).required().message({
    "any.required": "Password là bắt buộc",
    "string.empty": "Password không được bỏ trống",
    "string.min": "Password có độ dài là {#limit} ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref(`password`)).message({
    "any.required": "Comfirm là bắt buộc ",
    "string.only": "Password không khớp ",
    "string.empty": "Confirm không được để trống",
  }),
  age: Joi.number().max(100).min(18).message({
    "number.max": "Tuổi không hợp lệ ",
    "number.min": "Bạn chưa đủ tuổi ",
  }),
});
