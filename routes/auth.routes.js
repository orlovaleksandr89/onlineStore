const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const authController = require('../authController')
const authMiddleWare = require('../middleware/middleware')
const roleMiddleWare = require('../middleware/roleMiddleware')

// /auth/register
router.post(
  '/auth/register',
  [
    check('email', 'Некоректный email').isEmail(),
    check('password', 'Минимальная длинна пароля 6 символов').isLength({
      min: 6
    })
  ],
  authController.registration
)

// /auth/login
router.post(
  '/auth/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Неверный пароль').exists()
  ],
  authController.login
)
// /auth
router.get('/auth', authMiddleWare, authController.check)
// /
router.get('/items', authController.getItems)

router.post(
  '/auth/createitem',
  authMiddleWare,
  roleMiddleWare(['ADMIN']),
  authController.createItem
)

router.get('/item/:id', authController.getSingleItem)

module.exports = router
