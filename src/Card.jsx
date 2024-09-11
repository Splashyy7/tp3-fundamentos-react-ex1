import React from 'react';
import './Card.css';

const Card = ({ name, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
