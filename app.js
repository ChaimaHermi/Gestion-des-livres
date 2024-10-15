import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerTasks from "./routes/book.js";

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

app.use("/api/books", routerTasks);

export default app;
