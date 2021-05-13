import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie';
// import { gql } from '@apollo/client';
// import { graphql } from 'react-apollo';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// //import { ApolloProvider } from '@apollo/client';
// //import * as ApolloReactHooks from '@apollo/client';


// //make a frond-end Queries which will react use
// const allMovies = gql`
// {
//     movies {
//         name
//         genre
//         year
//     }
// }
// `
// class Movies extends Component {
//     state = {
//         movies: []
//     }

//     componentDidMount() {
//         this.startSetData();
//     }

//     startSetData = async () => {
//         const client = new ApolloClient({
//             uri: 'http://localhost:4000/graphql',
//             cache: new InMemoryCache()
//           });

//        await client.query({
//             query: gql`   
//             {
//                 movies {
//                     name
//                     genre
//                     year
//                 }
//             }
//             `
//           })
//           .then( (result) => {
//               this.setState(result)
//           });
//     }

//     render() {

//         console.log('Movies Component', this.state.movies);
//         return (
//             <div className="movies">
//                 { this.state.movies.map( (movie) => {
//                     return <Movie key={movie.id}
//                                   name={movie.name}
//                                   genre={movie.genre}
//                                   year={movie.year}
//                                   image={movie.image}  
//                             />      
//                 })}
//             </div>
//         );
//     }
// }

// export default Movies;
// //export default graphql(allMovies)(Movies)

// //bind query(allMovies) from backend  with frontend Component(Movies)
import { useQuery, gql } from '@apollo/client';

const MOVIES_QUERY = gql`
{
    movies {
      name
      genre
      year
    }
  }  
`;

export function Movies() {

    // const [movies, setMovies] = useState([])
    const {data, loading, error} = useQuery(MOVIES_QUERY)

    // useEffect(() => {
    //     if(data && data.movies)
    //     setMovies(data.movies)
    // }, [data])
    
    if (loading)
    return <p>Loading movies...</p>

    if (error)
        return <p>Error loading Movies</p>

    if (data && data.movies && Array.isArray(data.movies) && data.movies.length)
    return <div className="movies">
        {data.movies.map((movie) => {
            return <Movie key={movie.id}
                name={movie.name}
                genre={movie.genre}
                year={movie.year}
                image={movie.image}
            />
        })}
    </div>

    return <p>No movie details found...</p>
}

export default Movies