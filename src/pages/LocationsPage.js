import React, { useEffect, useState } from 'react';
import LocationCard from '../components/sections/LocationCard'
import { getLocations } from "../api/locationsGet";


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
      <div>
        {locations.map((location) => (
          <LocationCard location={location} key={location._id} />
        ))}
      </div>
    );
}

export default LocationPage;
