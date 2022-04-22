import React from 'react'

const MovieCard = (props) => {
    console.log(props.movie);
    
    return (
        <div>
        <img src={props.movie.Poster} alt="Movie Poster"/>
        <div> {props.movie.Title} </div>
        <div> {props.movie.Year} </div>
        <div> {props.movie.Type} </div> 
        </div>       
    )
}

export default MovieCard