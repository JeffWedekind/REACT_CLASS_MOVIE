import React from 'react'

const MovieCard = ({movieData}) => {
  return (
    <div>
        {movieData.Title}
        {movieData.Rated}
        {movieData.Runtime}
        {movieData.Genre}
        <img src={movieData.Poster} />
    </div>
  )
}

export default MovieCard