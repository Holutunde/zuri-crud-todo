const mongoose = require('mongoose')
const { Schema } = mongoose

const taskschema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  timestamp: {
    required: true,
    type: Date,
  },
})

module.exports = mongoose.model('Tasks', taskschema)
