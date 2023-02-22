import { useState } from "react";
import "./App.css";
import { Login } from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [isAuth, setisAuth] = useState(false);

  const loginHandler = (val) => {
    setisAuth(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Login loginHandler={loginHandler} />} />
      <Route
        path="/home"
        element={!isAuth ? <Navigate to={"/"} /> : <Home />}
      />
    </Routes>
  );
}

export default App;
