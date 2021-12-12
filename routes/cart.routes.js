const Router = require('express')
const router = new Router()

const authMiddleWare = require('../middleware/middleware')

const controller = require('../controllers')

router.get('/', authMiddleWare, controller.CartController.getCart)
router.post('/additem', authMiddleWare, controller.CartController.addItemToCart)

module.exports = router
