import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons' // Naturaleza
import { faArchway } from '@fortawesome/free-solid-svg-icons' // Construccion civil
import { faChurch } from '@fortawesome/free-solid-svg-icons' // Religion
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons' // galería de arte
import { faSeedling } from '@fortawesome/free-solid-svg-icons' // jadrin botanico
import { faHippo } from '@fortawesome/free-solid-svg-icons' // zoologico
import { faMonument } from '@fortawesome/free-solid-svg-icons' // monumento


function LocationIcon({ location }) {

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
            } else if (icon === 'jardín botánico') {
                icons.push(faHippo)
            } else if (icon === 'monumento') {
                icons.push(faMonument)
            }
        })

        console.log('Iconos', icons)

    } else {
        console.log('Esperando...')
    }


    return (
        <div className="Location__card">
           <div className="Location__icon">
                {icons.map(icon => {
                    return icon !== undefined ? <FontAwesomeIcon key={key++} icon={icon} /> : ''
                })}
           </div>
        </div>
    )
}

export default LocationIcon
