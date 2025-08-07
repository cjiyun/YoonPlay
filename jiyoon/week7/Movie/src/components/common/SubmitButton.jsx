import PropTypes from 'prop-types';
import { useShowSpinner } from '@/hooks/useShowSpinner';
import Spinner from '@/components/common/Spinner';

const SubmitButton = ({ text, disabled, loading }) => {
  const showSpinner = useShowSpinner(loading);
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full rounded-md p-2.5 text-white ${disabled ? 'cursor-default bg-gray-500' : 'bg-pink100 cursor-pointer hover:bg-blue-500'}`}
    >
      {showSpinner ? <Spinner /> : text}
    </button>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default SubmitButton;
