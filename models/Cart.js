const { Schema, model, Types } = require('mongoose')

const Cart = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  value: { type: String, required: true }
})

module.exports = model('Cart', Cart)
