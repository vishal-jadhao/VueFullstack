const User = require('../models').User

const AuthenticationCtrl = {
  async register (req, res) {
    try {
      var user = new User(req.body)
      await user.save()
      res.status(200).send(user)
    } catch (err) {
      res.status(400).send({
        error: 'User already registered...'
      })
    }
  }
}

module.exports = AuthenticationCtrl
