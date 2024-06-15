import "./Input.css";

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
  onIconClick,
  error,
}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon && (
        <span className="icon" onClick={onIconClick}>
          {icon}
        </span>
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
