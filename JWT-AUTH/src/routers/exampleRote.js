import express from "express"

export const router = express.Router();

router.get("/get", (request, response, next) => {
    response.send("...");
});
 
router.post("/post", (request, response, next) => {
    response.send("...");
});