/**
 * Artist JSON REST API
 */

const routes = require('./routes')

const Artist = require('../models/artist')
const Song = require('../models/song')

const api = routes.api

/**
 * Get artist by ID
 */
api.get('/artist/:id', (req,res) => {
    Artist.sync().then(() => {
        Artist.findById(req.params.id).then((artist) => {
            res.json(artist.get())
        })
    })
})

/**
 * Add artist to database
 */
api.post('/artist', (req, res) => {
    Artist.sync().then(() => {
        Artist.create(req.body).then((artist) => {
            res.json(artist.get())
        })
    })
})

/**
 * Get songs for artist
 */
api.get('/artist/:id/songs', (req, res) => {
    Song.sync().then(() => {
        Song.findAll({where: {artist_id: req.params.id}}).then((songs) => {
            res.json(songs)
        })
    })
})