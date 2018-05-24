/**
 * Artist JSON REST API
 */

const routes = require('./routes')

const Artist = require('../models/artist')

const api = routes.api

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