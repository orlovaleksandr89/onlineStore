const Router = require('express')
const router = new Router()

const authMiddleWare = require('../middleware/middleware')

const controller = require('../controllers')

router.get('/:userId', authMiddleWare, controller.CartController.getCart)
router.post(
  '/:userId/additem',
  authMiddleWare,
  controller.CartController.addItemToCart
)
router.delete(
  '/:userId/delete/:itemId',
  authMiddleWare,
  controller.CartController.deleteItemInCart
)

module.exports = router
