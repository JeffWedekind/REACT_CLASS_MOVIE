import React from 'react'
import {useState} from 'react'
import MovieModal from './MovieModal';

const MovieCard = (props) => {
    console.log("This is my movie card", props);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div onClick={() => setIsModalOpen(true)
        }>
        <img src={props.movie.Poster} alt="Movie Poster"/>
        <div> {props.movie.Title} </div>
        <div> {props.movie.Year} </div>
        <div> {props.movie.Type} </div>
        <MovieModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        movieID={props.movie.imdbID}
     /> 
        </div>       
    )
}

export default MovieCard