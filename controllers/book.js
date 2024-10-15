import Book from "../models/Book.js";

export const fetchBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ model: books, message: "success" });
};

export const getBookById = async (req, res) => {
  console.log(req.params.id);
  const book = await Book.findOne({ _id: req.params.id });
  res.status(200).json({ model: book, message: "success" });
};

export const addBook = async (req, res) => {
  console.log(req.body);
  const book = new Book(req.body);
  await book.save();
  res.status(201).json({ message: "Object created!!" });
};

export const updateBook = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(201).json({ model: book, message: "Object patched!!" });
};

export const deleteBook = async (req, res) => {
  console.log(req.params.id);
  await Book.deleteOne({ _id: req.params.id });
  res.status(201).json({ message: "Object deleted!!" });
};
