import React from "react";

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
        />
      </div>
      <div className="card__info">
        <h1>{props.location.title}</h1>
        <p>{props.location.description}</p>
        <div className="card__button-area">
          <span>Likes: {props.location.rating}</span>
          {/* modal?? */}
          <button>Ampliar</button>
          <button>Añadir a lista</button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
