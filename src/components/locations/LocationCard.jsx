import React from "react";
import { Link } from 'react-router-dom';

const LocationCard = ({ location }) => {

  return (
    <div className="card" style={{ border: "1px solid" }}>
      <div className="card__map">
        <img src={location.pictures !== undefined ? location.pictures[
          Math.floor(Math.random() * (location.pictures.length - 1))] : ''}
          alt={location.title}
          style={{ "width": "250px" }}
        />
      </div>
      <div className="card__info">
        <h1>{location.title}</h1>
        <p>{location.description}</p>
        <div className="card__button-area">
          <span>Likes: {location.rating}</span>
          <button>Ampliar</button>
          <button>tipo</button>
        </div>
      </div>

      <Link to={`/locations/${location._id}`}>Ver Location</Link>
    </div>
  );
};

export default LocationCard;