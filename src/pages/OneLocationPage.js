import React, { useEffect, useState } from 'react'
import { oneGetLocation } from "../api/oneLocationGet";
import { LocationView } from '../components/locations.index';
import Overlays from '../components/maps/Overlays';
import splitCoor from '../utils/split';

function OneLocationPage(props) {

    const { id } = props.match.params

    const [location, setLocation] = useState([]);
    const[coor, setCoor] = useState([]);

    useEffect(() => {
        oneGetLocationApi(id); // eslint-disable-next-line
    }, []);

    
    const oneGetLocationApi = async () => {
        try {
            const data = await oneGetLocation(id);
            setLocation(data);
            setCoor(splitCoor(data.latLng).reverse());
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            {/* <LocationCard location={location} flag={false}  /> */}
            <LocationView location={location} />
            <Overlays coor={coor}/>
        </div>
    )
}

export default OneLocationPage
