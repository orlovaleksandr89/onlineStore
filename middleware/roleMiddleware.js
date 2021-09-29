const jwt = require('jsonwebtoken')

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }

    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(403).json({ message: 'Пользователь не авторизован' })
      }

      const { role: userRoles } = jwt.verify(token, process.env.jwtSecretKey)

      let hasAccess = false

      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasAccess = true
        }
      })
      if (!hasAccess) {
        return res
          .status(403)
          .json({ message: 'Пользователь не имеет доступа' })
      }
      next()
    } catch (error) {
      console.log(error)
      return res
        .status(403)
        .json({ message: 'У вас нет прав для просмотра этой страницы' })
    }
  }
}
