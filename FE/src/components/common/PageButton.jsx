import PropTypes from 'prop-types';

const PageButton = ({ onClick, disabled, Icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`truncate rounded-md p-2.5 text-center ${disabled ? 'bg-gray-300 opacity-50' : 'bg-pink100 hover:cursor-pointer'}`}
    >
      {Icon}
    </button>
  );
};

PageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  Icon: PropTypes.elementType,
};

export default PageButton;
