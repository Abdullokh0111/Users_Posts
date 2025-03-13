const express = require("express");
const controller = require("../controllers/user.controller");
const router = express.Router();

router
  .get("/users", controller.getAllUsers)
  .get("/users/:id", controller.getUserById)
  .post("/users", controller.addUser);

module.exports = router;
