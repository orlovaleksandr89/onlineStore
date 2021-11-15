const User = require('./models/User')
const Role = require('./models/Role')
const Item = require('./models/Item')
const Cart = require('./models/Cart')
const Type = require('./models/Type')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const generateAccessToken = (id, role, email, cart) => {
  const payload = {
    id,
    role,
    email,
    cart
  }
  return jwt.sign(payload, process.env.jwtSecretKey, {
    expiresIn: process.env.expiration
  })
}

class authController {
  async registration(req, res) {
    try {
      const { email, password } = req.body

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
        email: email,
        password: hashedPassword,
        roles: userRole.value
      })

      await user.save()

      return res.status(201).json({ message: 'User created successfully' })
    } catch (e) {
      console.log(e)
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

      const token = generateAccessToken(
        user._id,
        user.roles,
        user.email,
        user.cart
      )
      return res.json({ token })
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
        req.user.cart
      )
      res.json({ token })
    } catch (error) {
      res.status(500).json({ error, message: 'Something went wrong...' })
    }
  }

  async getItems(req, res) {
    try {
      const items = await Item.find()
      res.status(200).json(items)
    } catch (error) {
      console.log(error.message)
    }
  }
  async getTypes(req, res) {
    try {
      const items = await Type.find()
      res.status(200).json(items)
    } catch (error) {
      console.log(error.message)
    }
  }

  async createItem(req, res) {
    try {
      const { title, description, price, imgURL, quantity, type } = req.body
      const itemCandidate = await Item.findOne({ title })
      if (itemCandidate) {
        return res.status(400).json({ message: 'This item already exists' })
      }
      const itemType = await Type.findOne({ value: type })
      console.log(itemType)
      const newItem = new Item({
        title,
        description,
        price,
        imgURL,
        quantity,
        itemType: itemType.value
      })

      await newItem.save()
      return res.status(201).json({ message: 'You successfully created item' })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async createItemType(req, res) {
    try {
      const { type: itemType } = req.body

      const typeCandidate = await Type.findOne({ value: itemType })

      if (typeCandidate) {
        return res.status(400).json({ message: 'Type already exists' })
      }
      const newType = new Type({
        value: itemType
      })

      await newType.save()
      return res.status(201).json({ message: 'You successfully created type' })
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }
  async postInCart(req, res) {
    try {
      const cart = Cart.findOne({ owner: req.user.id })
      return res.status(200).json(cart)
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async getSingleItem(req, res) {
    try {
      const id = req.params.id
      console.log(req)
      const item = await Item.findById(id)
      res.status(200).json(item)
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async deleteItem(req, res) {
    try {
      const id = req.body.id

      const item = await Item.findById(id)
      if (!item) {
        return res.status(400).json({ message: 'Item does not exist' })
      }
      const data = await Item.deleteOne({ _id: id })
      res.status(200).json({ message: 'Item deleted successfully' })
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }
}
module.exports = new authController()
