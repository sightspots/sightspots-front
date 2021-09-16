import React from "react";
import { Link } from 'react-router-dom';
import LocationModal from "./LocationModal";

const LocationCard = ({ location, flag = false }) => {
  console.log(location);
  return (
    <div className="card" style={{ border: "1px solid" }}>
      <div className="card__map" style={{ width: "150px" }}>
        <img
          className="card__img"
          style={{ width: "100%" }}
          // TODO: No recibe bien la imagen (?)
          // src={
          //   location.pictures[
          //   Math.floor(Math.random() * location.pictures.length)
          //   ]
          // }
          alt={location.title}
        />
      </div>
      <div className="card__info">
        <h1>{location.title}</h1>
        <p>{location.description}</p>
        <div className="card__button-area">
          <span>Likes: {location.rating}</span>
          {/* modal?? */}
          <button>Ampliar</button>
          {/* type */}
          <button>tipo</button>
        </div>
      </div>
      <LocationModal>
        <h1>Modal</h1>
      </LocationModal>

      {/* TODO: Falta gestionar que aparezcan los botones según isAdmin */}
      {flag && (
        <Link to={`/locations/${location._id}`}>
          Ver Location
        </Link>
      )}
      {flag && (
        <Link to={`/admin/edit/${location._id}`}>
          Editar Location
        </Link>
      )}
    </div>
  );
};

export default LocationCard;
