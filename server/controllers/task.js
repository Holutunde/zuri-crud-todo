const Task = require('../models/taskschema')

const createTask = async (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const newTask = new Task({
    title,
    description,
    timestamp: new Date().toLocaleDateString,
  })

  try {
    await newTask.save()
    return res.json({
      successful: true,
      message: newTask,
    })
  } catch (error) {
    return res.status(400).json({ successful: false, message: error.message })
  }
}

const getTask = (req, res, next) => {}

const getAllTasks = (req, res) => {}
const deleteTask = (req, res, next) => {}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
}
