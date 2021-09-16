import React, { useEffect, useState } from 'react'
import { oneGetLocation } from "../api/oneLocationGet";
import { LocationCard } from '../components/locations.index';

function OneLocationPage(props) {

    const { id } = props.match.params

    const [location, setLocation] = useState([]);

    useEffect(() => {
        oneGetLocationApi(id);
    }, []);

    
    const oneGetLocationApi = async () => {
        try {
            const data = await oneGetLocation(id);
            setLocation(data);
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <LocationCard location={location} flag={false} />
        </div>
    )
}

export default OneLocationPage
