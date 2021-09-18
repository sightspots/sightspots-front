import React from "react";
import { Link } from 'react-router-dom';
import { locationDelete } from '../../api/locationDelete';
import { getLocations } from "../../api/locationsGet";
import trimmedString from '../../utils/substring';

const LocationCard = ({ location, setLocations, flag = false }) => {

  const handleClick = async () => {
    await locationDelete(location._id);
    const locations = await getLocations();
    setLocations(locations);
  }

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
          {!flag && (
            <Link className="card__goto" to={`/locations/${location._id}`}>
              Ver Location
            </Link>
          )}
        </div>
      </div>

      {flag && <Link to={`/admin/edit/${location._id}`}>Editar Location</Link>}
      {flag && <button onClick={handleClick}>Borrar Location</button>}
    </div>
  );
};

export default LocationCard;