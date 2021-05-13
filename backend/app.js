const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')

mongoose.connect(
    'mongodb+srv://admin:adminarti@cluster0.a3r1h.mongodb.net/moviemaker?retryWrites=true&w=majority',
      {
          useUnifiedTopology: true,
          useCreateIndex: true,
          useNewUrlParser: true
      })
      .then(() => console.log("mongoDB is connected"))
      .catch((err) => console.log(err))

//frontend we are using port 3000 and backend 4000 
//using this this cors we can transfer data between two ports.....using this they are ready to speak to each other      
app.use(cors())    

//const schema = buildSchema(`type Query { name: String }`)
//const root = {
//    name: () => { 
//        return 'Hello From GraphQL'
//    }
//}

//Setting GraphQL
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    rootValue: resolvers,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.send('Hello from backend app.js')
})

app.listen(4000, () => {
    console.log('server on port 4000')
})