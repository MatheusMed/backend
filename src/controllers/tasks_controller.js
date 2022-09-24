const models = require('../models/tasks_model');

const getAll = async (_req, res) => {
  const tasks = await models.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {

  const createTasks = await models.createTask(req.body);

  return res.status(201).json(createTasks);
};
const deleteTask = async (req, res) => {

  const { id } = req.params;

  await models.deleteTask(id);

  return res.status(204).json();
};
const updateTask = async (req, res) => {

  const { id } = req.params;


  await models.updateTask(id, req.body);

  return res.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};