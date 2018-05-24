/**
 * Album JSON REST API
 */

const routes = require('./routes')

const Album = require('../models/album')

const api = routes.api

/**
 * Get album by ID
 */
api.get('/album/:id', (req,res) => {
    Album.sync().then(() => {
        Album.findById(req.params.id).then((album) => {
            res.json(album.get())
        })
    })
})

/**
 * Add album to database
 */
api.post('/albums', (req, res) => {
    Album.sync().then(() => {
        Album.create(req.body).then((album) => {
            res.json(album.get())
        })
    })
})