const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url)
  .then(console.log("connected to Database"))
  .catch((err) => console.log(err))
}

module.exports = connectDB
