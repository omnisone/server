const Sequelize = require('sequelize')
const sequelize = require('../db/sql')
const Song = require('./song')
const Artist = require('./artist')

const Album = sequelize.define('Album', {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4, allowNull: false },
    name: { type: Sequelize.STRING },
})

Album.hasMany(Song, {as: 'Songs', foreignKey: 'album_id'})
Song.belongsTo(Album,{foreignKey: 'album_id'})

Artist.hasMany(Album,{as: 'ArtistAlbums', foreignKey: 'artist_id'})
Album.belongsTo(Artist,{foreignKey: 'artist_id'})

module.exports = Album
