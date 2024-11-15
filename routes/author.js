import Book from "../models/Author.js";
import express from "express";
import {
  addAuthor,

  //updateAllTask,
} from "../controllers/author.js";

const router = express.Router();

//ENPOINTS -- ROUTES

router.post("/", addAuthor);
export default router;
