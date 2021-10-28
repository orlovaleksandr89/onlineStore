const { Schema, model } = require('mongoose')

const Type = new Schema({
  value: { type: String, required: true }
})
module.exports = model('Type', Type)
