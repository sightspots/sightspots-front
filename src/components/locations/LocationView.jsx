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

    location.title !== undefined ? window.localStorage.setItem(location.title, 0) : console.log('Esperando...')

    console.log(location)

    return (
        <div className="Location">
            <div className="Location__slider">
                {pictures !== undefined ?

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
            <LocationInfo location={location} />
            <LocationIcon location={location} />
            <LocationDescription location={location} />
            {location.audio !== undefined ?
                <LocationSpotify trackId={location.audio}></LocationSpotify>
                : null
            }
            {coor.length > 0 ? <Overlays title={location.title} coor={coor} /> : ""}
            <Button name={'Guardar'} />
        </div>
    )
}

export default LocationView
