import React, {useEffect, useState} from "react";
import LocationsMapView from "../components/locations/LocationsMapView";
import { getLocations } from "../api/locationsGet";

const HomePage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocationsApi();
  }, []);

  const getLocationsApi = async () => {
    try {
      const data = await getLocations();
      setLocations(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <LocationsMapView locations={locations}/>
    </div>
  );
};

export default HomePage;
