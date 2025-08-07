import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteMovies } from '@/hooks/useInfinite';
import SkeletonMovieList from '@/components/common/SkeletonMovieList';
import MovieCard from '@/components/common/MovieCard';
import PropTypes from 'prop-types';

const MovieList = ({ category }) => {
  const {
    data: movies,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteMovies(category);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  console.log(movies);
  if (isError) {
    console.log(error.message);
  }

  return isError ? (
    <h1 className="text-pink100">데이터를 불러오지 못 했습니다.</h1>
  ) : isLoading ? (
    <div className="grid-auto-fill-120 bor gap-5">
      <SkeletonMovieList />
    </div>
  ) : (
    <div className="grid-auto-fill-120 gap-5">
      {movies?.pages.map((page, pageIdx) =>
        page.results.map(movie => <MovieCard key={`${pageIdx}-${movie.id}`} movie={movie} />)
      )}
      {isFetchingNextPage ? (
        <SkeletonMovieList />
      ) : (
        hasNextPage && <div ref={ref} className="h-1 w-full"></div>
      )}
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default MovieList;
