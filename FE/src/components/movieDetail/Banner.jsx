import PropTypes from 'prop-types';

const Banner = ({ movie }) => {
  let { backdrop_path, title, overview, release_date, vote_average, runtime } = movie;
  release_date = release_date.slice(0, 4);

  return (
    <div
      className="h-[40vh] rounded-xl bg-cover"
      style={{ backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}${backdrop_path})` }}
    >
      <div className="fade-right h-[40vh] w-1/3 min-w-20 border-b border-white pl-2.5">
        <h1 className="min-w-20 truncate">{title}</h1>
        <p className="min-w-20 truncate text-sm">
          ⭐ {vote_average} • {release_date} • {runtime}분
        </p>
        <p className="line-clamp-9 text-sm">{overview}</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Banner;
