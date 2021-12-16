const Cart = require('../models/Cart')

class CartController {
  async addItemToCart(req, res) {
    const { userId } = req.params
    console.log('user', userId)
    const { _id, quantity, title, price, imgURL } = req.body
    try {
      await Cart.findOneAndUpdate(
        { owner: userId },
        { $push: { products: { _id, quantity, title, price, imgURL } } }
      )

      return res.status(200).json({ message: 'Cart updated successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).send('Something went wrong')
    }
  }

  async getCart(req, res, next) {
    const { userId } = req.params
    try {
      const userCart = await Cart.findOne({ owner: userId })
      return res.status(200).json(userCart)
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  async deleteItemInCart(req, res) {
    const { userId, itemId } = req.params
    console.log('params', itemId)

    try {
      const deletedItem = await Cart.findOneAndUpdate(
        { owner: userId },
        { $pull: { products: { _id: itemId } } },
        { new: true }
      )
      return res
        .status(200)
        .json({ message: 'Item deleted from cart', deletedItem })
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }
}

module.exports = new CartController()
