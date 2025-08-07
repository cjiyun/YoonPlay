import { useParams } from 'react-router-dom';
import { useMovieCredits, useMovieDetails } from '../hooks/useMovie';
import Banner from '../components/movieDetail/Banner';
import CreditCard from '../components/movieDetail/CreditCard';
import SkeletonMovieDetailPage from '@/components/movieDetail/SkeletonMovieDetailPage';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading: movieLoading, isError: movieError } = useMovieDetails(movieId);
  const {
    data: credits,
    isLoading: creditLoading,
    isError: creditError,
  } = useMovieCredits(movieId);

  if (movieLoading || creditLoading) return <SkeletonMovieDetailPage />;
  if (movieError || creditError) return <h1>데이터 불러오지 못했습니다.</h1>;

  let { cast, crew } = credits;
  crew = crew.filter(credit => credit.job === 'Director');

  return (
    <div>
      <Banner movie={movie} />
      <h1 className="my-2.5 truncate">감독/출연</h1>
      <div className="grid-auto-fill-110 gap-5">
        <CreditCard credit={crew[0]} />
        {cast.map(credit => (
          <CreditCard key={credit.credit_id} credit={credit} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
