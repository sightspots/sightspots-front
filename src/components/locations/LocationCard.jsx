import React from "react";
import { Link } from 'react-router-dom';
import LocationModal from "./LocationModal";

const LocationCard = ({ location, flag = false }) => {

  console.log('LocationCard', location)


  return (
    <div className="card" style={{ border: "1px solid" }}>
      <div className="card__map" style={{ width: "150px" }}>
        <img src={location.pictures !== undefined ? location.pictures[
          Math.floor(Math.random() * (location.pictures.length - 1))] : ''} 
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
        <Link to={`/edit/${location._id}`}>
          Editar Location
        </Link>
      )}
    </div>
  );
};

export default LocationCard;



// location.pictures.length > 1 ? location.pictures[
//   Math.floor(Math.random() * location.pictures.length)
//   ] : location.pictures

//location.pictures !== undefined ? location.pictures[0] : location.pictures

// {location.pictures !== undefined ? location.pictures[
//   Math.floor(Math.random() * location.pictures.length - 1)] : location.pictures }