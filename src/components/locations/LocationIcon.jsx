import React, { useState, useEffect } from 'react'
import { ratingPut } from '../../api/ratingPut';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons' // Naturaleza
import { faArchway } from '@fortawesome/free-solid-svg-icons' // Construccion civil
import { faChurch } from '@fortawesome/free-solid-svg-icons' // Religion
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons' // galería de arte
import { faSeedling } from '@fortawesome/free-solid-svg-icons' // jadrin botanico
import { faHippo } from '@fortawesome/free-solid-svg-icons' // zoologico
import { faMonument } from '@fortawesome/free-solid-svg-icons' // monumento

import { faHeart as linea } from '@fortawesome/free-regular-svg-icons' // corazon LINEA !!
import { faHeart as solido } from '@fortawesome/free-solid-svg-icons' // corazon SOLIDO !!

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons' // avion papel
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons' // pulgar arriba
import { oneGetLocation } from '../../api/oneLocationGet';

function LocationIcon({ location }) {
    const [isFaved, setIsFaved] = useState();
    const [rating, setRating] = useState(location.rating);

    const tags = [
        'naturaleza',
        'construcción civil',
        'construcción religiosa',
        'galería de arte',
        'jardín botánico',
        'zoológico',
        'monumento'
    ]
    const types = [];
    const icons = [];
    let key = 0;

    useEffect(() => {
        const sightSpotsFavs = window.localStorage.getItem('sightSpotsFavs') !== null ? JSON.parse(window.localStorage.getItem('sightSpotsFavs')) : {}; 
        setIsFaved(!!sightSpotsFavs[location._id]?.isFav); 
    }, [location._id]);

    if (location !== undefined) {
        tags.forEach(tag => {
            if (location.type === tag) {
                types.push(tag)
            }
        })

        types.forEach(icon => {
            if (icon === 'naturaleza') {
                icons.push(faLeaf)
            } else if (icon === 'construcción civil') {
                icons.push(faArchway)
            } else if (icon === 'construcción religiosa') {
                icons.push(faChurch)
            } else if (icon === 'galería de arte') {
                icons.push(faPaintBrush)
            } else if (icon === 'jardín botánico') {
                icons.push(faSeedling)
            } else if (icon === 'zoológico') {
                icons.push(faHippo)
            } else if (icon === 'monumento') {
                icons.push(faMonument)
            }
        })

    } else {
        console.log('Esperando...');
    }

    const handleClick = () => {
        const sightSpotsFavs = window.localStorage.getItem('sightSpotsFavs') !== null ? JSON.parse(window.localStorage.getItem('sightSpotsFavs')) : {}; 
        sightSpotsFavs[location._id] = sightSpotsFavs[location._id] || {};
        sightSpotsFavs[location._id].isFav = !sightSpotsFavs[location._id].isFav;
        sightSpotsFavs[location._id].title = location.title;
        sightSpotsFavs[location._id].image = location.pictures[0];
        window.localStorage.setItem('sightSpotsFavs', JSON.stringify(sightSpotsFavs));
        setIsFaved(sightSpotsFavs[location._id].isFav);
    };

    const handleLike = async () => {
        await ratingPut(location._id);
        const newLocation = await oneGetLocation(location._id);
        setRating(newLocation.rating);
    };

    return (
        <>
            {icons.map(icon => {
                return icon !== undefined ? <FontAwesomeIcon key={key++} icon={icon} /> : ''
            })}
            <FontAwesomeIcon icon={faPaperPlane} />
            <FontAwesomeIcon onClick={handleClick} icon={isFaved ? solido : linea} />
            <FontAwesomeIcon onClick={handleLike} icon={faThumbsUp} />
            <span>{rating || location.rating}</span>
        </>
    )
}

export default LocationIcon