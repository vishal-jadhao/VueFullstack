const AuthenticationCtrl = require('../controller/AuthenticationCtrl')
const AuthenticationCtrlPolicy = require('../policies/AuthenticationCtrlPolicy')

const routes = (app) => {
  // Register route
  app.post('/register',
    AuthenticationCtrlPolicy.register,
    AuthenticationCtrl.register
  )
}

module.exports = routes
