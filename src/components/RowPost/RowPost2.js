import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './RowPost.css';

function RowPost2(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    const API_KEY = '3522a8f8d1c3332e1a9bb409de4df75e'; // Replace with your actual TMDB API key

    let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;
    if (props.title === 'Action') {
      url = 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28'; // Replace with the actual API URL for Tamil action movies
    }

    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.title]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeVideoPlayer = () => {
    setSelectedMovie(null);
  };

  const opts = {
    height: '360',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='row'>
      <h2 className='title'>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <div key={movie.id} className='poster' onClick={() => handleMovieClick(movie)}>
            <img
              className={props.isSmall ? 'smallposter' : 'poster'}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt='Movie Poster'
            />
            <div className='overlay'>
              <h5 className='movie-title'>{movie.title}</h5>
              <p className='movie-description'>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className='video-player'>
          <YouTube videoId={selectedMovie.videoId} opts={opts} />
          <button className='close-button' onClick={closeVideoPlayer}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default RowPost2;
