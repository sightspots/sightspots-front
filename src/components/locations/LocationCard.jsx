import React from "react";
import { Link } from 'react-router-dom';
import { imagesRandom } from "../../utils/functions";
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
              location.pictures !== undefined ? imagesRandom(location.pictures) : ""
            }
            alt={location.title}
          />
        </div>
      </Link>
      <div className="Location__card--list">
        <LocationIcon location={location} />
      </div>
    </div>
  );
};

export default LocationCard;