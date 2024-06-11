import "./Button.css";

const Button = ({ title  }) => {
  return (
    <button className="LoginButton">
      <p>{title}</p>
    </button>
  );
};

export default Button;
