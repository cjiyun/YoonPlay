import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useUser from '@/hooks/useUser';

const NonAuthRoute = ({ children }) => {
  const { user } = useUser();
  return user ? <Navigate to="/" /> : children;
};

NonAuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NonAuthRoute;
