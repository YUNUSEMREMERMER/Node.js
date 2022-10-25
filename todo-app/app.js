import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { router as todoRouter } from "./src/routers/todoRouter.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("veritabanına bağlandı");
  })
  .catch((err) => {
    console.log("veritabanına bağlanırken hata oluştu");
  });

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routers
app.use("/api", todoRouter);



app.get("/", (req, res) => {
  res.send("hoşgeldiniz");
});

app.listen(port, () => {
  console.log(`Server ${port} portunda başlatışldı`);
});
