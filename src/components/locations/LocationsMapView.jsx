import React from 'react'
import MultipleMap from '../maps/MultipleMap';
import getCoorArr from '../../utils/getCoorArr'

const LocationsMapView = (props) => {
    let coor = undefined;
    if (props.locations !== undefined) {
        coor = getCoorArr(props.locations);
    }else{
        console.log("Esperando coordenadas...");
    }
    return (
      <div>
        {coor !== undefined ? <MultipleMap locations={props.locations} arrCoor={coor} /> : <h1>No se ha podido cargar el mapa</h1>}
      </div>
    );
}

export default LocationsMapView
