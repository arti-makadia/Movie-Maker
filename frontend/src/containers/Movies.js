import React, { Component } from 'react';
import Movie from '../components/Movie';
import { gql } from '@apollo/client';
//import { graphql } from 'react-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
//import { ApolloProvider } from '@apollo/client';
//make a frond-end Queries which will react use
const allMovies = gql`
{
    movies {
        name
        genre
        year
    }
}
`
class Movies extends Component {
    state = {
        movies: [
            { id:1, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'},
            { id:2, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'},
            { id:3, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'},
            { id:4, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'},
            { id:5, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'},
            { id:6, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'},
            { id:7, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'},
            { id:8, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus'}
        ]
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const client = new ApolloClient({
            uri: 'http://localhost:4000/graphql',
            cache: new InMemoryCache()
          });
        
       await client.query({
            query: gql`
            {
                movies {
                    name
                    genre
                    year
                }
            }
            `
          })
          .then(result => console.log('Not in Render', result));
    }

    render() {
        
        console.log('Movies Component', this.props);
        return (
            <div className="movies">
                { this.state.movies.map( (movie) => {
                    return <Movie key={movie.id}
                                  name={movie.name}
                                  genre={movie.genre}
                                  year={movie.year}
                                  image={movie.image}  
                            />      
                })}
            </div>
        );
    }
}

export default Movies;
//bind query(allMovies) from backend  with frontend Component(Movies)