import React from "react";
import LocationModal from "./LocationModal";

const LocationCard = (props) => {
  return (
    <div className="card" style={{ border: "1px solid" }}>
      <div className="card__map" style={{ width: "150px" }}>
        <img
          className="card__img"
          style={{ width: "100%" }}
          src={
            props.location.pictures[
              Math.floor(Math.random() * props.location.pictures.length)
            ]
          }
          alt={props.location.title}
        />
      </div>
      <div className="card__info">
        <h1>{props.location.title}</h1>
        <p>{props.location.description}</p>
        <div className="card__button-area">
          <span>Likes: {props.location.rating}</span>
          {/* modal?? */}
          <button>Ampliar</button>
          {/* type */}
          <button>tipo</button>
        </div>
      </div>
          <LocationModal>
          <h1>Modal</h1>
          </LocationModal>
    </div>
  );
};

export default LocationCard;
