import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <button className="LoginButton" onClick={onClick}>
      <p>{title}</p>
    </button>
  );
};

export default Button;
