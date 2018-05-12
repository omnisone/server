const Sequelize = require('sequelize')
const sequelize = require('./sql')

sequelize.authenticate()
    .then(() => {console.log('Connection has been established successfully.')})
    .catch(err => {console.error('Unable to connect to the database:', err)})

