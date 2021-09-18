import React from "react";
import { Link } from 'react-router-dom';
import trimmedString from '../../utils/substring';
import LocationIcon from "./LocationIcon";

const LocationCard = ({ location }) => {

  return (
    <div className="card">
      <h1 className="card__name">{location.title}</h1>
      <Link className="card__goto" to={`/locations/${location._id}`}>
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
          />
        </div>
      </Link>
      <div className="Location__card--list">
        <LocationIcon location={location} />
      </div>


      {/* <div className="card__button-area">
        <span className="card__rating">Likes: {location.rating}</span>
        <Link className="card__goto" to={`/locations/${location._id}`}>
          Ver Location
        </Link>
      </div> */}
    </div>
  );
};

export default LocationCard;