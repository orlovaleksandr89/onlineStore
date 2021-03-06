const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json({ extended: true }))
app.use(cors())
app.use('/auth', require('./routes/auth.routes'))
app.use('/auth/admin', require('./routes/admin.routes'))
app.use('/auth/items', require('./routes/items.routes'))
app.use('/auth/types', require('./routes/types.routes'))
app.use('/auth/cart', require('./routes/cart.routes'))
app.use('/auth/orders', require('./routes/order.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
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
