import React, { useEffect, useState } from 'react'
import MovieList from "./MovieList"

export default function MovieForm () {

    const [movieList, setMovieList] = React.useState([]);

    React.useEffect (() => {
        const getMoviesByName = async (name) => {
        let apiKey = "3ba39a90";
            const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setMovieList(data.Search);
        };
        getMoviesByName('batman');
    }, []);

  return (
    <div><MovieList movieList={ movieList }/></div>
  )

}
