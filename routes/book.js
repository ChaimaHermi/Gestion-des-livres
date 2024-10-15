import Book from "../models/Book.js";
import express from "express";
import {
  fetchBooks,
  getBookById,
  addBook,
  deleteBook,
  updateBook,
  //updateAllTask,
} from "../controllers/book.js";

const router = express.Router();

//ENPOINTS -- ROUTES

router.get("/", fetchBooks);

router.get("/:id", getBookById);

router.post("/", addBook);

router.patch("/:id", updateBook);

//router.put("/:id", updateAllTask);

router.delete("/:id", deleteBook);

export default router;