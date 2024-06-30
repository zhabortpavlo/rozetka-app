import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import MainLogo from "../../../../assets/svg/MainLogo";
import EyeIcon from "../../../../assets/svg/EyeIcon";
import ClosedEye from "../../../../assets/svg/ClosedEyeIcon";

const Card = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const token = await mockLogin(username, password);
      localStorage.setItem("token", token);

      setUsername("");
      setPassword("");
      setErrorMessage("");
      setErrors({});

      navigate("/main-table-page");
    } catch (error) {
      setErrorMessage("Неправильний логін або пароль");
    }
  };

  const validate = () => {
    const errors = {};
    if (!username) errors.username = "Поле не може бути порожнім";
    if (!password) errors.password = "Поле не може бути порожнім";
    return errors;
  };

  const mockLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "password") {
          resolve("mock-token");
        } else {
          reject(new Error("Неправильний логін або пароль"));
        }
      }, 1000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="page-wrapper">
      <div className="main-card">
        <div className="logo">
          <MainLogo />
        </div>

        <div className="input-area">
          <div className="input-wrapper">
            <Input
              type="text"
              name="username"
              placeholder="User Name"
              value={username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>
          <div className="input-wrapper">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              icon={showPassword ? <ClosedEye /> : <EyeIcon />}
              onIconClick={togglePassword}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
        </div>
        <Button title="Login" onClick={handleSubmit} />
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default Card;
