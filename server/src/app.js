const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

// Server config
const config = require('./config/config')

// Database config
const dbConfig = require('./config/db.config')
mongoose.connect(dbConfig.url)
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Database is connected....')
})

const app = express()

app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

// End points
require('./routes/routes')(app)

app.listen(config.port, () => {
  console.log('Server Started...')
})

module.exports = app
