import React from 'react'

const MovieDetails = (props) => {
    console.log("This is my movie details", props);
  return (
    <div>{props.title}</div>
  )
}

export default MovieDetails