const jwt = require('jsonwebtoken')

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }

    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(403).json({ message: 'Not authorized' })
      }

      const { role: userRoles } = jwt.verify(token, process.env.jwtSecretKey)

      let hasAccess = false

      if (role === userRoles) {
        hasAccess = true
      }

      if (!hasAccess) {
        return res.status(403).json({ message: 'Not authorized' })
      }
      next()
    } catch (error) {
      return res.status(403).json({ message: 'Not authorized' })
    }
  }
}
