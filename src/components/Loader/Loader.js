import React from "react";
import "./style.css";

const Loader = ({ color }) => {
  return (
    <div class="lds-ring">
      <div style={{ borderColor: `${color ? "blue" : ""}` }}></div>
      <div style={{ borderColor: `${color ? "blue" : ""}` }}></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
