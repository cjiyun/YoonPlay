const Banner = ({ movie }) => {
  let {backdrop_path, title, overview, release_date, vote_average, runtime} = movie;
  release_date = release_date.slice(0, 4);

  return (
    <div
      className='bg-cover h-[40vh] rounded-xl'
      style={{backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}${backdrop_path})`}}
    >
      <div className='w-1/3 h-[40vh] min-w-20 fade-right border-b border-white pl-2.5'>
        <h1 className='nowrap-ellipsis min-w-20'>{title}</h1>
        <p className='nowrap-ellipsis min-w-20 text-sm'>⭐ {vote_average} • {release_date} • {runtime}분</p>
        <p className='line-clamp-9 text-sm'>{overview}</p>
      </div>
    </div>
  )
}

export default Banner;