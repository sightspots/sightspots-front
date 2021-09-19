import React, {useEffect, useState} from "react";
import LocationsMapView from "../components/locations/LocationsMapView";
import { getLocations } from "../api/locationsGet";

const MapPage = () => {
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
    <div className="Container">
      <LocationsMapView locations={locations}/>
    </div>
  );
};

export default MapPage;
