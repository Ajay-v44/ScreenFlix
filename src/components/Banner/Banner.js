import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY, imageurl } from '../Constents/constats';
import axios from '../../axios';

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setMovie(response.data.results[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : 'loading'})`,
      }}
    >
            <div className="content">
                <h1 className="title">{movie ? movie.title : 'Loading...'}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">
                    {movie ? movie.overview : "Loading"}
                </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
