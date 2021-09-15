import React, { useEffect, useState } from 'react'
import { Location } from '../components/Location';
import { oneGetLocation } from "../api/oneLocationGet";

function OneLocationPage(match) {

    const { id } = match.params

    const [location, setLocation] = useState([]);

    useEffect(() => {
        oneGetLocationApi(id);
    }, []);

    
    const oneGetLocationApi = async () => {

        try {
            const data = await oneGetLocation();
            setLocation(data);
        } catch (error) {
            console.log(error)
        }

    }
    console.log(location)
    return (
        <div>
            <Location key={location._id} location={location} />
        </div>
    )
}

export default OneLocationPage
