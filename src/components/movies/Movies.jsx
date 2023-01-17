import React from 'react'
import './style.css'

const Movies = ({ movie }) => {
    const IMG_PATH = "https://image.tmdb.org/t/p/w500"


    return (
        <div className='card-movie'>
            <div className='card-movies' key={movie.original_title}>
                {
                    movie ? <img src={`${IMG_PATH}${movie.poster_path}`} alt="" /> : <div><h2>IMG not found</h2></div>
                }
                <h2>{movie.original_title}</h2>

            </div>
        </div>
    )
}

export default Movies