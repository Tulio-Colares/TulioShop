const jwt = require('jsonwebtoken')

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
      })

      // Set JWT as HTTP-only coockie
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 2592000000 // 30 days
      })
}

module.exports = generateToken