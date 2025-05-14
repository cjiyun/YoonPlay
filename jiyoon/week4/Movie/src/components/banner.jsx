import '../css/movie-detail.css';

const Banner = ({ movie }) => {
  console.log('banner : ' + movie)
  let {backdrop_path, title, overview, release_date, vote_average, runtime} = movie;
  release_date = release_date.slice(0, 4);

  return (
    <div className="banner" style={{backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}${backdrop_path})`}}>
      <div className='movie-info'>
        <h1 className="banner-title">{title}</h1>
        <p className='movie-meta'>⭐ {vote_average} • {release_date} • {runtime}분</p>
        <p className='movie-overview'>{overview}</p>
      </div>
    </div>
  )
}

export default Banner;