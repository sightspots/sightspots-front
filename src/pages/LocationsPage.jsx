import React, { useEffect, useState } from 'react';
import { LocationCard } from '../components/locations.index'
import { getLocations } from "../api/locationsGet";
import LocationSearch from '../components/locations/LocationSearch';


function LocationPage() {
  
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocationsApi();
    }, []);

    
    const getLocationsApi = async () => {

        try {
            const data = await getLocations();
            setLocations(data);
        } catch (error) {
            console.log(error)
        }

    }

    return (
      <>
        <LocationSearch locations={locations} />
        {locations.map((location) => (
          <LocationCard location={location} key={location._id} flag={false} />
        ))}
      </>
    );
}

export default LocationPage;
