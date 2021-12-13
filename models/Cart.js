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
      title: String,
      price: Number,
      imgURL: String
    }
  ]
}

module.exports = model('Cart', Cart)
