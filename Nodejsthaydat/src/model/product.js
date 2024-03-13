import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    nam: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timeseries: true, versionKey: false }
);
export default mongoose.model("Product", productSchema);
