const Sequelize = require('sequelize')

const secrets = require('../secrets')

const sequelize = new Sequelize(secrets.database, secrets.username, secrets.password, {
    host: 'localhost',
    dialect: 'postgres',

    pool: {max: 5, min: 0, acquire: 30000, idle: 10000},

    operatorsAliases: false
})

sequelize.authenticate()
    .then(() => {console.log('Connection has been established successfully.')})
    .catch(err => {console.error('Unable to connect to the database:', err)})