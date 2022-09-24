const connetion = require('./connection');

const getAll = async () => {
  const [tasks] = await connetion.execute('SELECT * FROM tasks');
  return tasks;
};
const createTask = async (task) => {

  const { title } = task;

  const query = 'INSERT INTO tasks(title,status,create_at) VALUES (?,?,?)';

  const dateUTC = new Date(Date.now()).toUTCString();

  const [createTask] = await connetion.execute(query, [title, 'pendente', dateUTC,]);
  return { insertId: createTask.insertId };
};
const deleteTask = async (id) => {

  const [deleteTask] = await connetion.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return deleteTask;

};
const updateTask = async (id, task) => {

  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
  const { title, status } = task;

  const [updatedTask] = await connetion.execute(query, [title, status, id]);
  return updatedTask;

};


module.exports = {
  getAll, createTask, deleteTask, updateTask
};