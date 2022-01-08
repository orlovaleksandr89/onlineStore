const User = require('../models/User')
const Role = require('../models/Role')
const Order = require('../models/Order')
const Cart = require('../models/Cart')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const generateAccessToken = (id, role, email, name) => {
  const payload = {
    id,
    role,
    email,
    name
  }
  return jwt.sign(payload, process.env.jwtSecretKey, {
    expiresIn: process.env.expiration
  })
}

class AuthController {
  async registration(req, res) {
    try {
      const { email, password, name } = req.body

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Please check your username and password'
        })
      }

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res
          .status(400)
          .json({ message: 'User with this email already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 7)
      const userRole = await Role.findOne({ value: process.env.ROLE })

      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        roles: userRole.value
      })

      await user.save()
      await Cart.create({ owner: user._id })
      // await Order.create({ owner: user._id })

      return res.status(201).json({ message: 'User created successfully' })
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Please check your username and password'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res
          .status(400)
          .json({ message: 'There is no user with this email' })
      }
      const isMatch = bcrypt.compareSync(password, user.password)

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: 'Check your password and try again' })
      }

      if (user.roles === 'ADMIN') {
        const token = generateAccessToken(user._id, user.roles, user.email)
        return res.json({ token })
      }

      const token = generateAccessToken(
        user._id,
        user.roles,
        user.email,
        user.name
      )
      const userCart = await Cart.findOne({ owner: user._id })

      return res.json({ token, userCart })
    } catch (error) {
      res.status(500).json({ error, message: 'Something went wrong...' })
    }
  }

  async check(req, res, next) {
    try {
      const token = generateAccessToken(
        req.user.id,
        req.user.role,
        req.user.email,
        req.user.name
      )
      const userCart = await Cart.findOne({ owner: req.user.id })
      res.json({ token, userCart })
    } catch (error) {
      res.status(500).json({ error, message: 'Something went wrong...' })
    }
  }
}
module.exports = new AuthController()
