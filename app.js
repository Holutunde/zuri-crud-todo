const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const notFound = require('./middleware/not-found')
const tasks = require('./server/routes/tasks')
const connectDB = require('./database/connect')
require('dotenv').config()

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/tasks', tasks)

app.use(notFound)
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
