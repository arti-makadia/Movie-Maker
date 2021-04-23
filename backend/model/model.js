const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: String,
    genre: String,
    year: String
})

module.exports = new mongoose.model('Movie', movieSchema)
// means that.....mongoose will create one model 'Movie' which structure is same as movie Schema and export that Movie model.