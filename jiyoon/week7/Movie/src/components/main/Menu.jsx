import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ path, text, icon }) => {
  return (
    <Link to={path} className="flex items-center gap-3 px-5 text-sm">
      {icon}
      <p>{text}</p>
    </Link>
  );
};

Menu.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default Menu;
