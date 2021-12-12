const { Schema, model, Types } = require('mongoose')

const Cart = {
  owner: {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  },
  products: [
    {
      productId: String,
      quantity: Number,
      name: String,
      price: Number
    }
  ]
}

module.exports = model('Cart', Cart)
