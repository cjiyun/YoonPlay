import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {poster_path, title, release_date, id} = movie;
  return (
    <Link to={`/movie/${id}`}
      className='flex flex-col'
    >
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
        className='place-self-center w-full h-4/5 rounded-xl hover:brightness-50'
      />
      <p className='nowrap-ellipsis w-full text-[4%] font-bold mt-1.5'>{title}</p>
      <p className='nowrap-ellipsis w-full text-[1%]'>{release_date}</p>
    </Link>
  )
}

export default MovieCard;