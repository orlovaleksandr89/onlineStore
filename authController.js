const User = require('./models/User')
const Role = require('./models/Role')
const Item = require('./models/Item')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('./config')
const { validationResult } = require('express-validator')

const generateAccessToken = (id, role) => {
  const payload = {
    id,
    role
  }
  return jwt.sign(payload, config.jwtSecretKey, {
    expiresIn: '1h'
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
          message: 'некоректные данные для регистрации'
        })
      }

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res
          .status(400)
          .json({ message: 'User with this email already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 7)
      const userRole = await Role.findOne({ value: 'USER' })
      const user = new User({
        email,
        password: hashedPassword,
        roles: [userRole.value]
      })

      await user.save()

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
          message: 'Некоректные данные при входе в систему'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }
      const isMatch = bcrypt.compareSync(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль' })
      }

      const token = generateAccessToken(user._id, user.roles)
      return res.json({ token })
    } catch (error) {
      res.status(500).json({ error, message: 'Что-то пошло не так' })
    }
  }
  async getItems(req, res) {
    try {
      const items = await Item.find()
      res.json(items)
    } catch (error) {
      console.log(error.message)
    }
  }

  async createItem(req, res) {
    try {
      const { title, description, price, imageURL, amount } = req.body
      const itemCandidate = await Item.findOne({ title })
      if (itemCandidate) {
        return res.status(400).json({ message: 'Такой товар уже есть в базе' })
      }

      const newItem = new Item({
        title,
        description,
        price,
        imageURL,
        amount
      })

      await newItem.save()
      return res.status(201).json({ message: 'Товар успешно создан' })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async getSingleItem(req, res) {
    try {
      const { id } = req.query
      res.json(id)
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }
}
module.exports = new authController()
