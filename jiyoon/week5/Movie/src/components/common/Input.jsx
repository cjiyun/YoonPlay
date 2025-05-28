const Input = ({ name, type, placeholder, register, touchedFields, errors }) => {
  return (
    <div className="text-black space-y-1">
      <input
        type={type === 'email' ? 'text' : type} {...register(name)}
        placeholder={placeholder}
        className="input-style" />
      {touchedFields[name] &&
        <p className="nowrap-ellipsis error-message">{errors[name]?.message}</p>
      }
    </div>
  )
}

export default Input;