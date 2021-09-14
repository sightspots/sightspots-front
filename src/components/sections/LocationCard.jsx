import React from "react";

// test
const LocationCard = () => {
  return (
    <div className="card" style={{ border: "1px solid"}}>
      <div className="card__map" style={{ width: "150px" }}>
        <img
          className="card__img"
          style={{ width: "100%" }}
          src="https://cdn.getyourguide.com/img/location/60096d8b4abac.jpeg/88.jpg"
        />
      </div>
      <div className="card__info">
        <h1>Sample Location</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
        </p>
        <div className="card__button-area">
          <button>Like</button>
          <button>Ampliar</button>
          <button>Añadir a lista</button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
