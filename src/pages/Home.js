import React from "react";
import HomePage from "../components/Homepage/HomePage";

const Home = ({ loginHandler }) => {
  return (
    <>
      <HomePage loginHandler={loginHandler} />
    </>
  );
};

export default Home;
