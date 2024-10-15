import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  publication_year: { type: Number, required: false },
  pages: { type: Number, required: false },
  language: { type: String, required: false },
});

export default mongoose.model("book", bookSchema);
