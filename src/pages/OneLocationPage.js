import React, { useEffect, useState } from 'react'
import { Location } from '../components/Location';
import { oneGetLocation } from "../api/oneLocationGet";

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
    console.log(location)
    return (
        <div>
            <Location key={location._id} location={location} flag={false} />
        </div>
    )
}

export default OneLocationPage
