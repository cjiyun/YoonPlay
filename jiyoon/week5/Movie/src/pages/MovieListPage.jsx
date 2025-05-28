import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/movie/MovieCard";
import axios from "axios";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  let {category} = useParams();
  if (category === 'up-coming') {
    category = 'upcoming';
  } else {
    category = category.replace('-', '_');
  }

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        }
      })
      setMovies(movies.data.results);
    }
    getMovies().catch(err => console.log(err));
  }, [category]);

  return (
    <div className="grid-auto-fill-120 gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieListPage;