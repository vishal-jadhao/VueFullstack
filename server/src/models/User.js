const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  id: ObjectId,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

var User = mongoose.model('User', UserSchema)

module.exports = User
