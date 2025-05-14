const CrewCard = ({ credit }) => {
  console.log('crew : ', credit)
  const {name, profile_path, job} = credit;
  
  return (
    <div className="credit-card">
      <img 
        src={`${import.meta.env.VITE_IMAGE_URL}${profile_path}`} 
        alt={name}
        className="credit-profile-img" 
      />
      <p className="credit-name">{name}</p>
      <p className="credit-job">{job}</p>
    </div>
  )
}

const CastCard = ({ credit }) => {
  console.log('cast : ', credit)
  const {name, profile_path, character} = credit;
  
  return (
    <div className="credit-card">
      <img 
        src={profile_path ? `${import.meta.env.VITE_IMAGE_URL}${profile_path}` : '/images/no-profile.jpg'} 
        alt={name}
        className="credit-profile-img" 
      />
      <p className="credit-name">{name}</p>
      <p className="credit-character">{character}</p>
    </div>
  )
}

export {CrewCard, CastCard};