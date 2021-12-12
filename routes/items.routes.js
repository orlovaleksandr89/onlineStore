const Router = require('express')
const router = new Router()

const controller = require('../controllers')

router.get('/', controller.ItemController.getItems)
router.get('/:id', controller.ItemController.getSingleItem)

module.exports = router
