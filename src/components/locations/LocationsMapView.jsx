import React from 'react'
import MultipleMap from '../maps/MultipleMap';
import getCoorArr from '../../utils/getCoorArr'

const LocationsMapView = (props) => {
    let coor = undefined;
    if (props.locations !== undefined) {
        coor = getCoorArr(props.locations);
    }else{
        console.log("esperando coordenadas...");
    }
    return (
      <div>
        {coor !== undefined ? <MultipleMap locations={props.locations} arrCoor={coor} /> : <h1>Aquí se debe de ver un Mapa :S</h1>}
      </div>
    );
}

export default LocationsMapView
