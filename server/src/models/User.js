const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

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

UserSchema.pre('save', function (next) {
  const user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      // override the cleartext password with the hashed one
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

var User = mongoose.model('User', UserSchema)

module.exports = User
