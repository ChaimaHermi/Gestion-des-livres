import Author from "../models/Author.js";

export const addAuthor = async (req, res) => {
  console.log(req.body);
  const author = new Author(req.body);
  await author.save();
  res.status(201).json({ message: "Author created!!" });
};
