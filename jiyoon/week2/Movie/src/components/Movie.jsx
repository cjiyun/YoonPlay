import { useState } from "react";
import { MOVIES } from "../mocks/movies";
import '../css/Movie.css'

export default function Movie() {
  const [movies, setMovies] = useState(MOVIES.results);
  // const movies = MOVIES.results;
  return (
    <div style={{
      display: 'flex', 
      flexWrap: 'wrap',
    }}>
      {movies.map(({adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count}, _) => (
          <img key={id}
            className="movie"
            src={poster_path}
            style={{
              width: '100px',
              borderRadius: '10px',
              margin: '10px',
            }} 
          />
      ))}
    </div>
  )
}