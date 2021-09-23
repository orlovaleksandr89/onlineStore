const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cart: [{ type: Types.ObjectId, ref: 'Cart' }],
  roles: [{ type: String, ref: 'Role' }]
})

module.exports = model('User', schema)
