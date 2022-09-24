const express = require('express');

const tasksController = require('./controllers/tasks_controller');

const taskMiddlewares = require('./middlewares/taskMIddlewares');


const router = express.Router();


router.get('/tasks', tasksController.getAll);

router.post('/tasks', taskMiddlewares.validateTitle, tasksController.createTask);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id', taskMiddlewares.validateTitle, taskMiddlewares.validateStatus, tasksController.updateTask);

module.exports = router;
