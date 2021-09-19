import React, { useEffect, useState } from 'react'
import { oneGetLocation } from "../api/oneLocationGet";
import { LocationView } from '../components/locations.index';

function OneLocationPage(props) {
    const { id } = props.match.params

    const [location, setLocation] = useState([]);

    useEffect(() => {
        oneGetLocationApi(id); // eslint-disable-next-line
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
        <>
            <LocationView location={location} user={props.user} />
        </>
    )
}

export default OneLocationPage