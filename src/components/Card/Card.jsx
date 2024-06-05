import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span><a href="https://wa.me/+2349044974094" target="_blank">
      <button className="c-button">Message Me</button></a>
    </div>
  );
};

export default Card;
