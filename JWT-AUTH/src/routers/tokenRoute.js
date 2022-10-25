import express from "express";
import { generateToken } from "../controllers/jwtAuth.js";

export const router = express.Router();

router.post("/getToken", generateToken);
