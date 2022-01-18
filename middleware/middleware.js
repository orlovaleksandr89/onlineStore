const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res
        .status(403)
        .json({ message: 'Your session has expired. Please login' })
    }
    const decodedData = jwt.verify(token, process.env.jwtSecretKey)
    req.user = decodedData

    next()
  } catch (error) {
    return res
      .status(403)
      .json({ message: 'Your session has expired. Please login' })
  }
}
