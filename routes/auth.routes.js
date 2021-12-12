const Router = require('express')
const router = new Router()
const { check } = require('express-validator')

const authMiddleWare = require('../middleware/middleware')
const controller = require('../controllers')

router.get('/', authMiddleWare, controller.AuthController.check)

// /auth/register
router.post(
  '/register',
  [
    check('email', 'Check your email').isEmail(),
    check('password', 'Minimum length must be at least 8 characters').isLength({
      min: 8
    })
  ],
  controller.AuthController.registration
)

// /auth/login
router.post(
  '/login',
  [
    check('email', 'Check your email').isEmail(),
    check('password', 'Check your password').exists()
  ],
  controller.AuthController.login
)

module.exports = router
