import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("product", productSchema);
