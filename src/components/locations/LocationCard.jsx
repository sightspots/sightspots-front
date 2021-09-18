import React from "react";
import { Link } from 'react-router-dom';
import trimmedString from '../../utils/substring';

const LocationCard = ({ location }) => {

  return (
    <div className="card">
      <div className="card__picture">
        <img
          className="card__img"
          src={
            location.pictures !== undefined
              ? location.pictures[
              Math.floor(Math.random() * (location.pictures.length - 1))
              ]
              : ""
          }
          alt={location.title}
          style={{ width: "250px" }}
        />
      </div>
      <div className="card__info">
        <h1 className="card__name">{location.title}</h1>
        <p className="card__description">
          {trimmedString(location.description)}
        </p>
        <div className="card__button-area">
          <span className="card__rating">Likes: {location.rating}</span>
          <Link className="card__goto" to={`/locations/${location._id}`}>
            Ver Location
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;