import React from 'react';

const Movie = (props) => {
  return (
    <div className="card">
        <div className="container">
            <img src="https://rb.gy/mmwyus" alt="John Wick" width="100%" height="250px" />
            <h2>{props.name}</h2>
            <h4>{props.genre} - {props.year}</h4>
        </div>
    </div>
  );
}

export default Movie;