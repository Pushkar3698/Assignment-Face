import React from "react";
import LoginPage from "../components/Login/LoginPage";

export const Login = ({ loginHandler }) => {
  return (
    <>
      <LoginPage loginHandler={loginHandler} />
    </>
  );
};
