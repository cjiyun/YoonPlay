import useCustomFetch from "../hooks/useCustomFetch";
import MovieCard from "../components/movie/MovieCard";

const HomePage = () => {
  const {data:movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko-KR&page=1`);

  if (isLoading) {
    return <h1>로딩 중...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <div className="grid-auto-fill-120 gap-5">
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default HomePage;