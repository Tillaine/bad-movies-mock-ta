import React from 'react';
import addFav from './addFav.jsx'

var Movie = (props) => {
  const {  id, release_date, vote_average, title, poster_path } = props.movie; 

  return (
        <li className="movie_item">
          <img onClick={props.handleClick} id={`${id}`} className="poster" src= {`https://image.tmdb.org/t/p/w500${poster_path}`} />
          <div className="movie_description">
            <h3>{title.slice(0, 50)}</h3>
            <section className="movie_details">
              <div className="propsr">
                <span className="title">Year </span>
                <span>{release_date.slice(0, 4)}</span>
              </div>
              <div className="movie_rating">
                <span className="title">Rating</span>
                <span>{vote_average}</span>
              </div>
            </section>
          </div>
        </li>
    );
}


export default Movie;