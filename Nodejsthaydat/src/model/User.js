import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      requered: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);
UserSchema.index({ username: 1, email: 1 });
export default mongoose.model("User", UserSchema);
