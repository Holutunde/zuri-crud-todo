const Task = require('../models/taskschema')

const createTask = async (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const newTask = new Task({
    title,
    description,
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

const getTask = async (req, res) => {
  try {
    //console.log(req.params.id)
    const tastRecord = await Task.findById(req.params.id)
    if (tastRecord == null) {
      return res.status(404).json({ successful: false, message: 'Not found' })
    }

    return res.json({
      successful: true,
      message: tastRecord,
    })
  } catch (error) {
    return res.status(500).json({ successful: false, message: error.message })
  }
}

const getAllTasks = (req, res) => {
  Task.find({}, '', function (err, allTasks) {
    return res.json({
      successful: true,
      message: allTasks,
    })
  })
}

const updateTask = async (req, res) => {
  try {
    const id = req.params.id
    const updatedTask = req.body
    const options = { new: true }

    const newUpdate = await Task.findByIdAndUpdate(id, updatedTask, options)

    if (newUpdate == null) {
      return res
        .status(404)
        .json({ successful: false, message: 'Task not found' })
    }

    return res.json({
      successful: true,
      message: newUpdate,
    })
  } catch (error) {
    return res.status(400).json({ successful: false, message: error.message })
  }
}
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id
    const rmTask = await Task.findByIdAndDelete(id)

    return res.json({
      successful: true,
      message: `Task with id: ${rmTask.id}  deleted.`,
    })
  } catch (error) {
    return res.status(400).json({ successful: false, message: error.message })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
