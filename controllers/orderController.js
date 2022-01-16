const Order = require('../models/Order')

class OrderController {
  async createOrder(req, res) {
    try {
      const { userId } = req.params
      const { orderItems, paymentId, totalPrice } = req.body

      let order = new Order({
        owner: userId,
        paymentId,
        totalPrice,
        orderItems
      })
      const userOrder = order.save()

      res.status(201).json({ message: 'Order created successfully' })
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }

  async getOrder(req, res) {
    try {
      const { userId } = req.params

      const userOrders = await Order.find({ owner: userId })

      res.status(200).json({ userOrders })
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong...' })
    }
  }
}

module.exports = new OrderController()
