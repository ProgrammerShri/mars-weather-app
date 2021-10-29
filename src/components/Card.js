import React from "react";
import "./css/Card.css";

const Card = ({ sol, day, high, low, celsius }) => {
  return (
    <div className="card">
      <p className="card__sol">{sol}</p>
      <p className="card__day">{day}</p>
      <div className="card__line"></div>
      <p className="card__high">
        High: {high} {celsius ? "C" : "F"}
      </p>
      <p className="card__low">
        Low: {low} {celsius ? "C" : "F"}
      </p>
    </div>
  );
};

export default Card;
