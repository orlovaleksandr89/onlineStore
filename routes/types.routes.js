const Router = require('express')
const router = new Router()

const controller = require('../controllers')

router.get('/', controller.TypeController.getTypes)

module.exports = router
