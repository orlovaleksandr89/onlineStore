const { Schema, model, Types } = require('mongoose')

const Order = new Schema({
  owner: { type: Types.ObjectId, ref: 'User', required: true },
  orderItems: [{ type: Types.ObjectId, ref: 'Item' }],
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  }
})

module.exports = model('Order', Order)
