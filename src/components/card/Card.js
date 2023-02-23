import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const Card = ({ name, image }) => {
  return (
    <motion.div
      className="card-container"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <div className="user-img">
        <img src={image} alt="" />
      </div>
      <div className="user-name">{name}</div>
    </motion.div>
  );
};

export default Card;
