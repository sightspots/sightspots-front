import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import LocationInfo from './LocationInfo';
import LocationDescription from './LocationDescription';
import LocationHeader from './LocationHeader';
import LocationIcon from './LocationIcon';
import Button from '../ui/Button';
import { LocationSpotify } from '../locations.index';
import Overlays from '../../components/maps/Overlays';
import splitCoor from '../../utils/split';

function LocationView({ location }) {

    const pictures = location.pictures;
    const images = [];
    let coor = [];

    if (location.latLng) coor = splitCoor(location.latLng).reverse();
    

    if (pictures !== undefined) {
        pictures.map(image => {
            let obj = { url: image }
            return images.push(obj)
        });
    } else {
        console.log('Esperando...')
    }

    let width = document.documentElement.clientWidth || document.body.clientWidth
    let height = (window.screen.height/1.2)

    

    console.log('El que me interesa', pictures)

    return (
        <div className="Location">
            <div className="Location__slider">
                {pictures !== undefined  ?

                    <SimpleImageSlider
                        style={{overflow: 'hidden'}}
                        width={width}
                        height={height}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />

                    : ''}
            </div>
            <LocationHeader />
            <div className="Location__card--view">
                <LocationIcon location={location} />
            </div>
            <LocationInfo location={location} />
            <LocationDescription location={location} />
            {coor.length > 0 ? <div className="Location__card_special"><Overlays title={location.title} coor={coor} /></div> : ""}
            {location.audio !== undefined ?
                <div className="Location__card_special"><LocationSpotify trackId={location.audio}></LocationSpotify></div>
                : null
            }
            
            <div className="Location__card_special"><Button name={'Guardar'} /></div>
        </div>
    )
}

export default LocationView
