const { AuthenticationCtrl, SongCtrl } = require('../controller/')
const AuthenticationCtrlPolicy = require('../policies/AuthenticationCtrlPolicy')

const routes = (app) => {
  // Register route
  app.post('/register',
    AuthenticationCtrlPolicy.register,
    AuthenticationCtrl.register
  )

  // Login route
  app.post('/login',
    AuthenticationCtrl.login
  )

  // Song
  app.get('/songs',
    SongCtrl.index
  )

  app.post('/songs',
    SongCtrl.post
  )
}

module.exports = routes
