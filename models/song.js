const Sequelize = require('sequelize')
const sequelize = require('../db/sql')

const Song = sequelize.define('song', {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4, allowNull: false },
    name: { type: Sequelize.STRING },
    duration: { type: Sequelize.INTEGER },
    genre: { type: Sequelize.STRING },
    magnet: { type: Sequelize.STRING },
    contractAddress: { type: Sequelize.STRING },    
})

module.exports = Song