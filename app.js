import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerBooks from "./routes/book.js";
import authorRoutes from "./routes/author.js";
import categoryRoutes from "./routes/category.js";
import signupRoutes from "./routes/signUp.js";
mongoose
  .connect(
    "mongodb+srv://chaimahermi:ISAMM123@cluster0.1637d.mongodb.net/dbisamm"
  )
  .then(function () {
    console.log("Connection réussie");
  })
  .catch(function (e) {
    console.log("Connection échouée: ", e);
  });

const app = express();

//middlewares

app.use(cors());
app.use(express.json());

app.use("/api/books", routerBooks);
app.use("/api/authors", authorRoutes);
app.use("/api/Categories", categoryRoutes);
app.use("/api/signup", signupRoutes);

export default app;
