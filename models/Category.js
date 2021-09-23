const { Schema, model } = require('mongoose')

const Category = new Schema({
  brand: { type: String, required: true }
})
module.exports = model('Category', Category)
