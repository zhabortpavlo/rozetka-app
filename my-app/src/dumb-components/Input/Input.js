import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, icon, onIconClick }) => {
  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} />
      {icon && (
        <span className="icon" onClick={onIconClick}>
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
