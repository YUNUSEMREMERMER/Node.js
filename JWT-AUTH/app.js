import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import {router as tokenRouter} from "./src/routers/tokenRoute.js"
import {router as exampleRouter} from "./src/routers/exampleRote.js"
import {router as userRoute} from "./src/routers/userRoute.js"
import { verifyToken } from "./src/middlewares/verify-token.js";

const app = express();
dotenv.config();

//Connect DB
mongoose.connect('mongodb://localhost/auth-db');

// Global variable
const api_secret_key = process.env.api_secret_key;
app.set("api_secret_key", api_secret_key)


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/token", tokenRouter);
app.use('/verifyToken', verifyToken, exampleRouter)
app.use('/user', userRoute)


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
