const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: { type: String, ref: 'Role' }
})

module.exports = model('User', schema)
