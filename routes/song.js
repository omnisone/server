/**
 * Song JSON REST API
 */

const routes = require('./routes')

const Song = require('../models/song')

const api = routes.api

/**
 * Get song by ID
 */
api.get('/song/:id', (req,res) => {
    Song.sync().then(() => {
        Song.findById(req.params.id).then((song) => {
            res.json(song.get())
        })
    })
})

/**
 * Add song to database
 */
api.post('/song', (req, res) => {
    Song.sync().then(() => {
        Song.create(req.body).then((song) => {
            res.json(song.get())
        })
    })
})

api.post('/song/search', (req, res) => {
    Song.searchForSong(req.body.terms,(results) => {
        res.send(results)
    })
})