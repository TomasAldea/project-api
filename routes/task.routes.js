const express = require("express");
const route = express.Router();
const {
  createTask,
  removeTask
} = require("../controllers/task.controller");

route
.post("/", createTask)
.delete("/:taskId", removeTask)

module.exports = route;