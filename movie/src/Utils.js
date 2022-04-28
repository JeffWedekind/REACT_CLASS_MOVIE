// Declare variable for the search input and create a function to get the movie details
export const getMoviesByName = async (name) => {
    let apiKey = "3ba39a90";
    // Accessing the API 
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
        // Get an object of detailed information about the specified movie
        const response = await fetch(url);
        // return an array of movies with a matching title from OMDB API
        const data = await response.json();
        console.log(data);
}

getMoviesByName();



// Declare variable for the search input and create a function to get the movie details
export const getMoviesDetailsById = async (id) => {
    let apiKey = "3ba39a90";
    // Accessing the API 
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${id}`;
        // Get an object of detailed information about the specified movie
        const response = await fetch(url);
        // return an array of movies with a matching title from OMDB API
        const data = await response.json();
        console.log(data);
}

getMoviesByName();