const task = require("../models/Task.model");


exports.createTask = async (req, res) => {
    try {
      const newTask = await Task.create(req.body);
      res.status(200).json({ data: newTask });
    } catch (e) {
      res.status(400);
    }
  };

  exports.removeTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      await Task.findByIdAndDelete(taskId);
      res.status(200).json({ data: { message: "task delete succesfull" } });
    } catch (e) {
      res.status(400);
    }
  };