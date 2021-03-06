const Project = require("../models/Project.model");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ data: projects });
  } catch (e) {
    res.status(400);
  }
};

exports.getProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId).populate("tasks")
    res.status(200).json({ data: project });
  } catch (e) {
    res.status(400);
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      req.body,
      { new: true }
    );
    res.status(200).json({ data: updatedProject });
  } catch (e) {
    res.status(400);
  }
};

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(200).json({ data: newProject });
  } catch (e) {
    res.status(400);
  }
};

exports.removeProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    await Project.findByIdAndDelete(projectId);
    res.status(200).json({ data: { message: "delete succesfull" } });
  } catch (e) {
    res.status(400);
  }
};

