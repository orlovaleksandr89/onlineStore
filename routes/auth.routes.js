const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const authController = require('../authController')
const authMiddleWare = require('../middleware/middleware')
const roleMiddleWare = require('../middleware/roleMiddleware')

router.get('/auth', authMiddleWare, authController.check)
// /auth/register
router.post(
  '/auth/register',
  [
    check('email', 'Некоректный email').isEmail(),
    check('password', 'Минимальная длинна пароля 8 символов').isLength({
      min: 8
    })
  ],
  authController.registration
)

// /auth/login
router.post(
  '/auth/login',
  [
    check('email', 'Введите корректный email').isEmail(),
    check('password', 'Неверный пароль').exists()
  ],
  authController.login
)
// /auth
router.post('/auth/cart', authMiddleWare, authController.postInCart)
// /items
router.get('/auth/items', authController.getItems)
router.get('/auth/singleitem/:id', authController.getSingleItem)
router.get('/auth/types', authController.getTypes)

// admin section
router.post(
  '/auth/createitem',
  authMiddleWare,
  roleMiddleWare('ADMIN'),
  authController.createItem
)
router.post(
  '/auth/createtype',
  authMiddleWare,
  roleMiddleWare('ADMIN'),
  authController.createItemType
)
router.post(
  '/auth/deleteitem',
  authMiddleWare,
  roleMiddleWare('ADMIN'),
  authController.deleteItem
)

module.exports = router
