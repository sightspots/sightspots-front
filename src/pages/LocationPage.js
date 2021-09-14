import React, { useEffect, useState } from 'react';
import { Location } from '../components/Location';
import { getLocations } from "../api/locationGet";


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
            {/*locations.map((location) => <Location key={location._id} location={location} />)*/}
        </div>
    )
}

export default LocationPage;
