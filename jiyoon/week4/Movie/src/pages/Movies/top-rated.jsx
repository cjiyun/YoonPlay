import useCustomFetch from "../../hooks/useCustomFetch";
import Card from "../../components/card";
import "../../css/movies.css"

const TopRated = () => {
  const {data:movies, isLoading, isError} = useCustomFetch(`/movie/top_rated?language=ko-KR&page=1`);

  if (isLoading) {
    return <h1>로딩 중...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  console.log(movies.data)

  return (
    <div className="movie-container">
      {movies.data?.results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default TopRated;