import React, { useEffect, useState } from 'react';
import { Location } from '../components/Location';
import { getLocations } from "../api/locationGet";
import LocationCard from '../components/sections/LocationCard'


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
