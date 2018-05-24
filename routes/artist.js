/**
 * Artist JSON REST API
 */

const routes = require('./routes')

const Artist = require('../models/artist')

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
api.post('/artists', (req, res) => {
    Artist.sync().then(() => {
        Artist.create(req.body).then((artist) => {
            res.json(artist.get())
        })
    })
})