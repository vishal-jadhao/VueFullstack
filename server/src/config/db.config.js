const mongo = {
  host: 'localhost',
  port: '27017',
  db: 'tabtracker'
}
const dbConfig = {
  // mongo configuration
  url: 'mongodb://' + mongo.host + ':' + mongo.port + '/' + mongo.db
}

module.exports = dbConfig
