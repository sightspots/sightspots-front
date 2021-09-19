import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function LocationSearch( props ) {

    const { locations } = props; // TODAS LAS LOCALIZACIONES

    const [datosLocations, setDatosLocations] = useState([])
    
    useEffect(() => {
        setDatosLocations(locations);
    }, [locations])


    const searchLocation = (value) => {

        const searchResult = datosLocations.filter( (location) => {
            return location.title.toLowerCase().includes(value.toLowerCase())
        });

        return searchResult.length < 1 ? props.showSearch('Búsqueda infructuosa') : props.showSearch(searchResult)
    }
    

    return (
        <div className="Searcher">
            <input
                className="Searcher__input"
                type="text"
                name="title"
                placeholder="Buscar por nombre"
                onChange={(e) => searchLocation(e.target.value)}   
            />
            <FontAwesomeIcon className="Searcher__icon" icon={faSearch} />
        </div>
    )
}

export default LocationSearch
