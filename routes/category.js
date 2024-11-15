import Category from "../models/Category.js";
import express from "express";
import {
  addCategory,

  //updateAllTask,
} from "../controllers/category.js";

const router = express.Router();

//ENPOINTS -- ROUTES

router.post("/", addCategory);
export default router;
