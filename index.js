const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json({ extended: true }))
app.use('/', require('./routes/auth.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

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
