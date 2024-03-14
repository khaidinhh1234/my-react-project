import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("User", UserSchema);
