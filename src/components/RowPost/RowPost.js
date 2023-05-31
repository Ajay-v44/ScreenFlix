import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RowPost.css';

function RowPost() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = '3522a8f8d1c3332e1a9bb409de4df75e'; // Replace with your actual API key

    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='row'>
      <h2>ScreenFlix Originals</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <div key={movie.id} className='poster'>
            <img className='poster'
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt='Movie Poster'
            />
            <h5 className='title'>{movie.title}</h5>
            <p className='description'>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RowPost;
