import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title must not exceed 100 characters"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author", // Référence au modèle Author
      required: [true, "Author is required"],
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category", // Référence au modèle Category
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
