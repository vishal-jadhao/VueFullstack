const { Song } = require('../models')

const SongCtrl = {
  async index (req, res) {
    try {
      const songs = await Song.find({})
      console.log(songs)
      res.status(200).send(songs)
    } catch (err) {
      res.status(403).send({
        error: 'Invalid'
      })
    }
  },
  async post (req, res) {
    try {
      const songs = new Song(req.body)
      await songs.save()
      res.status(200).send(songs)
    } catch (err) {
      res.status(403).send({
        error: 'Something went wrong please try again!'
      })
    }
  }
}

module.exports = SongCtrl
