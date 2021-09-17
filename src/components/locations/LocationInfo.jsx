import React from 'react'

function LocationInfo({ location }) {
    return (
        <div className="Location__card">
            <h2 className="Location__title">{location.title}</h2>
            <div className="Location__rating"><p className="Location__likes">20</p></div>
            <p className="Location__ubi">{location.latLng}</p>
            <p className="Location__hours">{location.visitingHours}</p>
        </div>
    )
}

export default LocationInfo
