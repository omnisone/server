/**
 * Song JSON REST API
 */

const routes = require('./routes')

const Song = require('../models/song')

const api = routes.api

/**
 * Add song to database
 */
api.post('/songs', (req, res) => {
    Song.sync().then(() => {
        Song.create(req.body).then((song) => {
            res.json(song.get())
        })
    })
})