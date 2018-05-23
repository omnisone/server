const Sequelize = require('sequelize')
const sequelize = require('../db/sql')
const Song = require('./song')

const Artist = sequelize.define('Artist', {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4, allowNull: false },
    name: { type: Sequelize.STRING },
})

Artist.hasMany(Song, {as: 'Songs', foreignKey: 'song_id'})
Song.belongsTo(Artist,{foreignKey: 'song_id'})

module.exports = Artist