const Router = require('express')
const router = new Router()

const authMiddleWare = require('../middleware/middleware')

const controller = require('../controllers')

router.get('/:userId', authMiddleWare, controller.OrderController.getOrder)
router.post(
  '/:userId/create',
  authMiddleWare,
  controller.OrderController.createOrder
)

module.exports = router
