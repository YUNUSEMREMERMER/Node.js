module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.create);
  
    // Retrieve all Tutorials
    router.get("/", users.findAll);

    app.use("/api/users", router);
};