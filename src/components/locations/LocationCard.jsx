import React from "react";
import { Link } from 'react-router-dom';
import { locationDelete } from '../../api/locationDelete';
import { getLocations } from "../../api/locationsGet";

const LocationCard = ({ location, setLocations, flag = false }) => {

  const handleClick = async () => {
    await locationDelete(location._id);
    const locations = await getLocations();
    setLocations(locations);
  }

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
          {/* modal?? */}
          <button>Ampliar</button>
          {/* type */}
          <button>tipo</button>
        </div>
      </div>

      {/* TODO: Hacer que salga alguna modal o algo de confirmación de eliminación de location */}
      {!flag && <Link to={`/locations/${location._id}`}>Ver Location</Link>}
      {flag && <Link to={`/admin/edit/${location._id}`}>Editar Location</Link>}
      {flag && <button onClick={handleClick}>Borrar Location</button>}
    </div>
  );
};

export default LocationCard;