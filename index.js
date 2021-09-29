const express = require('express')

const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json({ extended: true }))
app.use('/', require('./routes/auth.routes'))

const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log(`App working... on port = ${PORT}`)
    })
  } catch (error) {
    console.log(`server error ${error.message}`)
    process.exit(1)
  }
}

start()
