const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./database/connect')
require('dotenv').config()

// middleware

app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/', tasks)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    )
  } catch (error) {
    console.log(error)
  }
}

start()
