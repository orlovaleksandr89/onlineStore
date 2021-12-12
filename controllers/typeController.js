const Type = require('../models/Type')

class TypeController {
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
  async getTypes(req, res) {
    try {
      const items = await Type.find()
      res.status(200).json(items)
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = new TypeController()
