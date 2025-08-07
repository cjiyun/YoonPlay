import PropTypes from 'prop-types';

const Input = ({ name, type, placeholder, register, touchedFields, errors }) => {
  return (
    <div className="space-y-1 text-black">
      <input
        type={type === 'email' ? 'text' : type}
        {...register(name)}
        placeholder={placeholder}
        className="input-style"
      />
      {touchedFields[name] && <p className="error-message truncate">{errors[name]?.message}</p>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  touchedFields: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Input;
