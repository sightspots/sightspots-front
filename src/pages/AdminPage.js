import React, { useEffect, useState } from 'react';
import { Location } from '../components/Location';
import { getLocations } from "../api/locationsGet";
import { Link } from 'react-router-dom';



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
    window.localStorage.setItem("locations", JSON.stringify(locations));

    return (
        <div>
            <br />
            <br />
            <div>
                <Link to={`admin/create`}>
                    Crear Location
                </Link>
            </div>
            <br />
            <br />
            <div>{locations.map((location) => <Location key={location._id} location={location} flag={true} />)}</div>

        </div>
    )
}

export default LocationPage;
