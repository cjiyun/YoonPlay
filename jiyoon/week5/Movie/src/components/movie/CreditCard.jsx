const CreditCard = ({ credit }) => {
  const {name, profile_path} = credit;
  
  return (
    <div className="flex flex-col m-[2%]">
      <img
        src={profile_path ? `${import.meta.env.VITE_IMAGE_URL}${profile_path}` : '/images/no-profile.jpg'}
        alt={name}
        className="aspect-square object-cover rounded-full border-2 border-white"
      />
      <p className="nowrap-ellipsis text-center text-[0.5em]">{name}</p>
      {credit.known_for_department === 'Directing' ? (
        <p className="nowrap-ellipsis text-center text-[0.5em] text-gray-500">{credit.job}</p>
      ) : (
        <p className="nowrap-ellipsis text-center text-[0.5em] text-gray-500">{credit.character}</p>
      )}
    </div>
  )
}
export default CreditCard;