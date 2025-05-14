import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import Banner from "../../components/banner";
import {CrewCard, CastCard} from "../../components/credit";
import '../../css/movie-detail.css'

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const {data:movie, isLoading, isError} = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
  const {data:credits} = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

  console.log('detail movie : ', movie);
  console.log('detail credit : ', credits.data)

  if (isLoading || !movie?.data || !credits?.data) {
    return <h1>로딩 중...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  let {cast, crew} = credits.data;
  crew = crew.filter(credit => credit.job === 'Director');

  return (
    <div>
      <Banner movie={movie.data}/>
      <div className="credit-container">
        <h1 className="credit-header">감독/출연</h1>
        <div className="credit-list">
          <CrewCard credit={crew[0]}/>
          {cast.map((credit) => (
            <CastCard key={credit.credit_id} credit={credit}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage;