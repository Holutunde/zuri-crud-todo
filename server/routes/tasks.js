const express = require('express')
const router = express.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
} = require('../controllers/task.js')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).delete(deleteTask)

module.exports = router
