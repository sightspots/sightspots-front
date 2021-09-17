import React from 'react'
import { imagesRandom } from '../../utils/functions'
import { LocationSpotify } from '../locations.index';

function LocationView({ location }) {

    return (
        <div className="Location">
            <div className="Location__slider">
                <img className="Location__image" src={location.pictures !== undefined ? imagesRandom(location.pictures) : ''} alt={location.title} />
            </div>
            <div className="Location__header">
                <div className="Location__btnBack"></div>
                <div className="Location__avatar"></div>
            </div>
            {location.audio !== undefined ?
                <LocationSpotify trackId={location.audio}></LocationSpotify>
                : null
            }
        </div>
    )
}

export default LocationView