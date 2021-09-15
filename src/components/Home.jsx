import React, { useState } from "react";
import LocationCard from "./sections/LocationCard";

function Home() {

  const [location, setLocation] = useState({
    title: "sample tilte",
    description: "sample description",
    image:
      "https://cdn.getyourguide.com/img/location/60096d8b4abac.jpeg/88.jpg",
  }); 

  // setLocation({
  //   title: "sample tilte",
  //   description: "sample description",
  //   image:
  //     "https://cdn.getyourguide.com/img/location/60096d8b4abac.jpeg/88.jpg",
  // });

  return (
    <div>
      <h1>Inicio</h1>
      <LocationCard location={location}/>
    </div>
  );
}

export default Home;
