const { Schema, model } = require('mongoose')

const Item = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imgURL: { type: String, required: true },
  quantity: { type: Number, required: true },
  itemType: { type: String, required: true, ref: 'Type' }
})

module.exports = model('Item', Item)
