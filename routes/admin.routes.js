const Router = require('express')
const router = new Router()

const authMiddleWare = require('../middleware/middleware')
const roleMiddleWare = require('../middleware/roleMiddleware')
const controller = require('../controllers')

router.post(
  '/createitem',
  authMiddleWare,
  roleMiddleWare('ADMIN'),
  controller.ItemController.createItem
)
router.post(
  '/createtype',
  authMiddleWare,
  roleMiddleWare('ADMIN'),
  controller.TypeController.createItemType
)

router.post(
  '/updateitem',
  authMiddleWare,
  roleMiddleWare('ADMIN'),
  controller.ItemController.updateItem
)

router.delete(
  '/deleteitem',
  authMiddleWare,
  roleMiddleWare('ADMIN'),
  controller.ItemController.deleteItem
)

module.exports = router
