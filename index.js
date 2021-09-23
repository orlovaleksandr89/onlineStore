const express = require('express')
const config = require('./config')
const mongoose = require('mongoose')

const app = express()
app.use(express.json({ extended: true }))
app.use('/', require('./routes/auth.routes'))

const PORT = config.PORT || 5000

async function start() {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log(`App working... on ${PORT}`)
    })
  } catch (error) {
    console.log(`server error ${error.message}`)
    process.exit(1)
  }
}

start()
