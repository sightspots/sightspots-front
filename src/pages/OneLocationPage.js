import React, { useEffect, useState } from 'react'
import { oneGetLocation } from "../api/oneLocationGet";
import { LocationView } from '../components/locations.index';
import Overlays from '../components/maps/Overlays';
import splitCoor from '../utils/split';

function OneLocationPage(props) {

    const { id } = props.match.params

    const [location, setLocation] = useState([]);
    const [coor, setCoor] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        oneGetLocationApi(id); // eslint-disable-next-line
    }, []);


    const oneGetLocationApi = async () => {
        try {
            const data = await oneGetLocation(id);
            setLocation(data);
            setCoor(splitCoor(data.latLng).reverse());
            setTitle(data.title)
        } catch (error) {
            console.log(error)
        }
    }

    console.log("page", coor);
    return (
        <>
            <LocationView location={location} />
            {coor.length > 0 ? <Overlays title={title} coor={coor} /> : ""}
        </>
    )
}

export default OneLocationPage


// <LocationCard location={location} flag={false}  />