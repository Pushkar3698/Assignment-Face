import React from "react";
import "./style.css";
const Card = ({ name, image }) => {
  return (
    <div className="card-container">
      <div className="user-img">
        <img src={image} alt="" />
      </div>
      <div className="user-name">{name}</div>
    </div>
  );
};

export default Card;
