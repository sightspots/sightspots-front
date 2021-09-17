import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faWindowClose } from '@fortawesome/free-solid-svg-icons' // Naturaleza

function LocationDescription({ location }) {

    const [state, setState] = useState(false)

    const states = {
        show: 'show',
        hide: 'hide',
        down: faArrowDown,
        close: faWindowClose,

    }

    const changeState = () => {
        state ? setState(false) : setState(true)
    }

    if (state) {
        
    }

    return (
        <div className={state ? states.show : states.hide}>
            <div className="Location__accordion">
                <div className="Location__accordion_icon"><FontAwesomeIcon icon={state ? states.close : states.down} onClick={changeState} /></div>
                <h3 className="Location__accordion_tag" >Descripción</h3>
            </div>
            <div className="Location__description"> 
                <p>{location.description}</p>
            </div>
        </div>
    )
}

//{state ? show : hide}

export default LocationDescription
