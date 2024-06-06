import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, icon }) => {
  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} />
      {icon && <span className="icon">{icon}</span>}
    </div>
  );
};

export default Input;
