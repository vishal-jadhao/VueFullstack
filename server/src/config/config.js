const config = {
  port: process.env.PORT || 8081,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

module.exports = config
