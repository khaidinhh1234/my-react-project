import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    slug: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
    },
    gallery: {
      typy: Array,
    },
    description: {
      type: String,
    },
    discout: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: Array,
    },
    couInStock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Product", productSchema);
