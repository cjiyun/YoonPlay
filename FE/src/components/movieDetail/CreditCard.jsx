import PropTypes from 'prop-types';

const CreditCard = ({ credit }) => {
  const { name, profile_path } = credit;

  return (
    <div className="m-[2%] flex flex-col gap-1">
      <img
        src={
          profile_path
            ? `${import.meta.env.VITE_IMAGE_URL}${profile_path}`
            : '/images/no-profile.jpg'
        }
        alt={name}
        className="aspect-square rounded-full border-2 border-white object-cover"
      />
      <div>
        <p className="truncate text-center text-[0.5em]">{name}</p>
        {credit.known_for_department === 'Directing' ? (
          <p className="truncate text-center text-[0.5em] text-gray-500">{credit.job}</p>
        ) : (
          <p className="truncate text-center text-[0.5em] text-gray-500">{credit.character}</p>
        )}
      </div>
    </div>
  );
};

CreditCard.propTypes = {
  credit: PropTypes.object.isRequired,
};

export default CreditCard;
