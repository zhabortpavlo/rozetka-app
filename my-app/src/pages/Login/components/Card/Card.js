import React from "react";
import "./Card.css";
import Input from "../../../../dumb-components/Input/Input";
import Button from "../../../../dumb-components/Button/Button";
import MainLogo from "../../../../assets/svg/MainLogo";
import EyeIcon from "../../../../assets/svg/EyeIcon";

const Card = () => {
  return (
    <div className="page-wrapper">
      <div className="main-card">
        <div className="logo">
          <MainLogo />
        </div>

        <div className="input-area">
          <div className="input-wrapper">
            <Input type="text" placeholder="User Name" />
          </div>
          <div className="input-wrapper">
            <Input type="password" placeholder="Password" icon={<EyeIcon />} />
          </div>
        </div>
        <Button title="Login" />
      </div>
    </div>
  );
};

export default Card;
