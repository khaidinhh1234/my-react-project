import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  author: String,
  body: String,
  comments: [
    {
      body: String,
      date: Date,
    },
  ],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
export default mongoose.model("Blogs", blogsSchema);
