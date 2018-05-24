const Sequelize = require('sequelize')
const sequelize = require('../db/sql')

const Song = sequelize.define('Song', {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4, allowNull: false },
    name: { type: Sequelize.STRING },
    duration: { type: Sequelize.INTEGER },
    genre: { type: Sequelize.STRING },
    magnet: { type: Sequelize.STRING },
    contractAddress: { type: Sequelize.STRING },
    keywords: { type: Sequelize.STRING }
}, {
    hooks: {
        afterSave: (instance, options) => {
            let keywords = []
            const nameKeyword = instance.name.toLowerCase()
            let genreKeyword = []
            if(instance.genre) genreKeyword = instance.genre.toLowerCase().split(' ')
            keywords.push(nameKeyword)
            keywords = keywords.concat(genreKeyword)
            if(instance.artist_id) {
                instance.getArtist().then((artist) => {
                    const artistKeywords = artist.dataValues.name.toLowerCase().split(' ')
                    keywords = keywords.concat(artistKeywords)
                    instance.keywords = keywords.join(',')
                    instance.save()
                })
            } else {
                instance.keywords = keywords.join(',')
                instance.save()
            }
        }
    }
})

Song.searchForSong = (searchTerms,callback) => {
    if(!searchTerms) return
    const rawWordList = searchTerms.split(' ')
    rawWordList.map((word,index) => {
        rawWordList[index] = '%' + word.toLowerCase() + '%'
    })
    let query = "SELECT * FROM \"Songs\" WHERE keywords LIKE"
    console.log("word list",rawWordList)
    rawWordList.forEach((word,index) => {
        query += " ? AND keywords LIKE"
    })
    query = query.substr(0,query.length - 18)
    sequelize.query(query,{
        replacements: rawWordList, 
        type: Sequelize.QueryTypes.SELECT 
    }).then((songs) => {
        callback(songs)
    })
}

module.exports = Song
