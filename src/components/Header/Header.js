import React from "react";
import "./style.css";

const Header = ({ loginHandler }) => {
  return (
    <div className="header-container">
      <div className="logo">Infinity scroll</div>
      <div className="logout-btn">
        <button onClick={() => loginHandler(false)}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
