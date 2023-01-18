import React from 'react'
import './style.css'

const Movies = ({ movie, selectMovie, }) => {
    const IMG_PATH = "https://image.tmdb.org/t/p/w500"


    return (
        <div className='card-movie' onClick={() => selectMovie(movie)}>
            <div className='card-movies' key={movie.title}>
                {
                    movie ? <img className='img-bg' src={`${IMG_PATH}${movie.poster_path}`} alt="" /> : <div><h2>IMG not found</h2></div>
                }
                <p>{movie.title}</p>
            </div>
        </div>
    )
}

export default Movies