const { Schema, model } = require('mongoose')

const Item = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  amount: { type: Number, required: true }
  // category: [{ type: Schema.Types.ObjectId, required: true, ref: 'Category' }]
})

module.exports = model('Item', Item)
