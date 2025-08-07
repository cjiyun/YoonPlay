import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, id } = movie;
  return (
    <Link to={`/movie/${id}`} className="flex flex-col">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
        className="aspect-[2/3] w-full place-self-center rounded-md hover:brightness-50"
      />
      <p className="mt-1.5 w-full truncate text-[4%] font-bold">{title}</p>
      <p className="w-full truncate text-[1%]">{release_date}</p>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
