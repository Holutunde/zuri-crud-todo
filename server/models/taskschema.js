const mongoose = require('mongoose')
const { Schema } = mongoose

const taskschema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Task', taskschema)
