import express from "express"
import { todoAdd, todoGetAll, todoUpdate, todoDelete, todoGet } from "../controllers/todoController.js";

export const router = express.Router();

router.post("/todo", todoAdd)
router.get("/todo", todoGetAll)
router.put("/todo/:id", todoUpdate)
router.delete("/todo/:id", todoDelete)
router.get("/todo/:id", todoGet)