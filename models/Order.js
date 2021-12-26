const { Schema, model, Types } = require('mongoose')

const Order = new Schema({
  owner: { type: Types.ObjectId, ref: 'User', required: true },
  orderItems: [
    {
      productId: { type: String, required: true },
      title: { type: String, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  paymentId: { type: String, required: true },
  totalPrice: { type: Number, required: true, default: 0 },
  paidAt: { type: Date, default: Date.now }
})

module.exports = model('Order', Order)
