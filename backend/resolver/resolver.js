//this will generate output as per my graphql request. when ever i hit a query this resolvers will create a request and generate output

const Movie = require('../model/model')

//this resolvers is an object it will contain multiple movies
const resolvers = {
    movies: () => {
        //for finding all the movies from mongoDB collection
        return Movie.find({})
    },

    movieByName: (args) => {
        //find the perticular movie which is same as provided by arguments
        return Movie.findOne({name: args.name})
    },

    addMovie: (args) => {
        let newMovie = new Movie({ name: args.name, genre: args.genre, year:args.year})
        
        //object.save will save object inside the mongoDB.....this is predefine/inbuilt function of mongoDB which will save data into mongoDB
        newMovie.save()
        
        return newMovie
    }
}

module.exports = resolvers