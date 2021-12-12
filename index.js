const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json({ extended: true }))
app.use('/auth', require('./routes/auth.routes'))
app.use('/auth/admin', require('./routes/admin.routes'))
app.use('/auth/items', require('./routes/items.routes'))
app.use('/auth/types', require('./routes/types.routes'))
app.use('/auth/cart', require('./routes/cart.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
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
