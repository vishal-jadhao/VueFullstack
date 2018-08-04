const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const SongSchema = new Schema({
  id: ObjectId,
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumImage: String,
  youTubeId: String,
  lyrics: String,
  tab: String
})

const Song = mongoose.model('Song', SongSchema)

module.exports = Song
