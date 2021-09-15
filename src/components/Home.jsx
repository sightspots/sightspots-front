import React from "react";
import LocationCard from "./sections/LocationCard";

function Home() {

  return (
    <div>
      <h1>Inicio</h1>
      <LocationCard location={location}/>
    </div>
  );
}

export default Home;
