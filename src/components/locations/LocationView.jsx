import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import LocationInfo from './LocationInfo';
import LocationDescription from './LocationDescription';
import LocationHeader from './LocationHeader';
import LocationIcon from './LocationIcon';


function LocationView({ location }) {

    const pictures = location.pictures;
    const images = [];

    if (pictures !== undefined) {
        pictures.map(image => {
            let obj = { url: image }
            return images.push(obj)
        });
    } else {
        console.log('Esperando...')
    }

    let width = window.screen.width
    let height = (window.screen.height)

    console.log(location)

    return (
        <div className="Location">
            <div className="Location__slider">
                {pictures !== undefined ?

                    <SimpleImageSlider

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
        </div>
    )
}

// profile={profile}

export default LocationView
