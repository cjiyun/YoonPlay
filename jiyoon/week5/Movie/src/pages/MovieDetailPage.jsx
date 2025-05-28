import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import Banner from "../components/movie/Banner";
import CreditCard from "../components/movie/CreditCard";

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const {data:movie, isLoading, isError} = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
  const {data:credits} = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

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
      <div className="mt-2.5">
        <h1 className="nowrap-ellipsis my-2.5">감독/출연</h1>
        <div className="grid-auto-fill-110 gap-5">
          <CreditCard credit={crew[0]}/>
          {cast.map((credit) => (
            <CreditCard key={credit.credit_id} credit={credit}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage;