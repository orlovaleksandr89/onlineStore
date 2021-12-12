const Cart = require('../models/Cart')

class CartController {
  async addItemToCart(req, res, next) {
    const { id } = req.user
    const { _id, quantity, name, price } = req.body
    try {
      let cart = await Cart.findOne({ owner: id })

      if (cart) {
        //cart exists for user
        let itemIndex = cart.products.findIndex((p) => p._id == _id)

        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.products[itemIndex]
          productItem.quantity = quantity
          cart.products[itemIndex] = productItem
        } else {
          //product does not exists in cart, add new item
          cart.products.push({ _id, quantity, name, price })
        }
        cart = await cart.save()
        return res
          .status(201)
          .json({ message: 'You successfully added product to cart', cart })
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          owner: id,
          products: [{ _id, quantity, name, price }]
        })

        return res.status(201).json(newCart)
      }
    } catch (error) {
      console.log(error)
      res.status(500).send('Something went wrong')
    }
  }

  async getCart(req, res, next) {
    try {
      const { id } = req.user
      if (!id) {
        return res.status(403).jspn({ message: 'Not Authorized' })
      }
      const userCart = await Cart.findOne({ owner: id })

      return res.status(200).json(userCart)
    } catch (error) {
      console.log(error)
      res.status(500).send('Something went wrong')
    }
  }
}

module.exports = new CartController()
