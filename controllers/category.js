import Category from "../models/Category.js";

export const addCategory = async (req, res) => {
  console.log(req.body);
  const category = new Category(req.body);
  await category.save();
  res.status(201).json({ message: "Category created!!" });
};
