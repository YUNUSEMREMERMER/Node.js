import express from "express";
import { createUser } from "../controllers/userController.js";

export const router = express.Router();

router.post("/", createUser);
