const Item = require('../models/Item')
const Type = require('../models/Type')

class ItemController {
  async getItems(req, res) {
    try {
      const items = await Item.find()
      res.status(200).json(items)
    } catch (error) {
      console.log(error.message)
    }
  }

  async createItem(req, res) {
    try {
      const { title, description, price, imgURL, quantity, itemType } = req.body
      const itemCandidate = await Item.findOne({ title })
      if (itemCandidate) {
        return res.status(400).json({ message: 'This item already exists' })
      }
      const typeOfItem = await Type.findOne({ value: itemType })
      const newItem = new Item({
        title,
        description,
        price,
        imgURL,
        quantity,
        itemType: typeOfItem.value
      })

      const itemFromDb = await newItem.save()

      return res
        .status(201)
        .json({ message: 'You successfully created item', itemFromDb })
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async updateItem(req, res) {
    try {
      const { id, payload } = req.body

      const doc = await Item.findByIdAndUpdate(
        id,
        { ...payload },
        { new: true }
      )
      if (!doc) {
        return res.status(400).json({ message: 'There is no item' })
      }

      return res
        .status(200)
        .json({ message: 'You updeted item successfully', doc })
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async getSingleItem(req, res) {
    try {
      const id = req.params.id

      const item = await Item.findById(id)
      res.status(200).json(item)
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async deleteItem(req, res) {
    try {
      const { id } = req.params

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

module.exports = new ItemController()
