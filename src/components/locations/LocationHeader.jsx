import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';


function LocationHeader({ profile }) {

    const history = useHistory();

    const returnPage = () => {
        return history.goBack();
    }
    
    return (
        <div className="Location__header">
            <div className="Location__back"><FontAwesomeIcon onClick={returnPage} style={{ fontSize: '28px', color: 'white' }} icon={faArrowLeft} /></div>
            <div className="Location__avatar"></div>
        </div>
    )
}

export default LocationHeader
