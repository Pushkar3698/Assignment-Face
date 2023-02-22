import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";
import "./style.css";

const LoginInput = ({ loginHandler }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    setloader(true);

    if (username.toLowerCase() !== "foo" || password.toLowerCase() !== "bar") {
      seterror(true);
      setloader(false);
      return;
    }

    loginHandler(true);

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      seterror(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div className="login-input-container">
      <div className="user-input">
        <label htmlFor="">Username</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <div className="user-input">
        <label htmlFor="">Password</label>
        <input
          type="password"
          name=""
          id=""
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      {error && (
        <div className="login-error">
          <p>incorrect password or username</p>
        </div>
      )}
      <div className="login-btn">
        <button onClick={onSubmitHandler}>
          <span>Login </span>
          {loader && (
            <div className="loader">
              <Loader />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default LoginInput;
