const { User } = require('../models')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

const jwtSignUser = (user) => {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

const AuthenticationCtrl = {
  async register (req, res) {
    try {
      const user = new User(req.body)
      await user.save()
      res.status(200).send({
        user,
        message: 'Registration Successfull...'
      })
    } catch (err) {
      res.status(400).send({
        error: 'User already registered'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        email: email
      })
      console.log(email, user)
      if (!user) {
        res.status(403).send({
          error: 'Login information is incorrect'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Password is invalid'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Failed to login'
      })
    }
  }
}

module.exports = AuthenticationCtrl
