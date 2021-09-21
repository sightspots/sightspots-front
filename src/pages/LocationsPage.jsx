import React, { useEffect, useState } from 'react';
import { LocationCard } from '../components/locations.index'
import { getLocations } from "../api/locationsGet";
import LocationSearch from '../components/locations/LocationSearch';

function LocationPage() {

  const [locations, setLocations] = useState([]);
  const [toPaint, setToPaint] = useState(null);
  let aux = locations;

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

  }

  const showSearch = (props) => {

    if (props.length < 1) {
      setToPaint(locations);
    } else {
      setToPaint(props);
    }
  }

  if (toPaint !== null) {
    aux = toPaint;
  }

  return (
    <div className="Container">

      <LocationSearch locations={locations} showSearch={showSearch} />

      { typeof aux === 'string' ?

        <h2 className="Searcher__title">{aux}</h2> :

        aux.map((location) => (
          <LocationCard location={location} key={location._id} />
        ))
      }
    </div>
  );
}

export default LocationPage;
