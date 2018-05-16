const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()

const api = express.Router()
//cors and api route setup
app.use('/api/v1', api)
app.use(cors())
api.use(cors())
api.use(bodyparser.json())

//exports
module.exports.app = app
module.exports.api = api

//require routes
require('./song')

//start server
const port = 7707

const server = app.listen(port, () => {
  console.log("Running on port " + port)
})
