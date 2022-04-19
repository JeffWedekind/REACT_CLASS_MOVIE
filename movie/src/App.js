import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import { movieData } from "./Components/movieData";

function App() {
  return (
    <div>
      <MovieCard movieData = {movieData} />
    </div>
  );
}

export default App;