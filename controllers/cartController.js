const Cart = require('../models/Cart')

class CartController {
  async addItemToCart(req, res, next) {
    const { id } = req.user
    const { _id, quantity, title, price, imgURL } = req.body
    try {
      await Cart.updateOne(
        { owner: id },
        { $push: { products: { _id, quantity, title, price, imgURL } } },
        { upsert: true }
      )

      return res.status(200).json({ message: 'Cart updated successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).send('Something went wrong')
    }
  }

  async getCart(req, res, next) {
    try {
      const { id } = req.user

      if (!id) {
        return res.status(403).json({ message: 'Not Authorized' })
      }
      const userCart = await Cart.findOne({ owner: id })

      return res.status(200).json(userCart)
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  async deleteItemInCart(req, res) {
    const { id } = req.user
    const { itemId } = req.params

    try {
      await Cart.updateOne(
        { owner: id },
        { $pull: { products: { _id: itemId } } },
        { new: true }
      )
      return res.status(200).json({ message: 'Item deleted from cart' })
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }
}

module.exports = new CartController()
