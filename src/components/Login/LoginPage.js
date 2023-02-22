import React from "react";
import LoginInput from "../LoginInput/LoginInput";
import "./style.css";

const LoginPage = ({ loginHandler }) => {
  return (
    <div className="login-page">
      <LoginInput loginHandler={loginHandler} />
    </div>
  );
};

export default LoginPage;
