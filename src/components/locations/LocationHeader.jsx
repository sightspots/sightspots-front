import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


function LocationHeader({ user }) {
    const history = useHistory();

    const returnPage = () => {
        return history.goBack();
    }

    return (
        <div className="Location__header">
            <div className="Location__back"><FontAwesomeIcon onClick={returnPage} style={{ fontSize: '28px', color: 'white' }} icon={faArrowLeft} /></div>
            {
                user ?
                    <Link to='/user'><div style={{backgroundImage: `url(${user.avatar})`}} className="profile-header__avatar Location__avatar" /></Link>
                    : null
            }
        </div>
    )
}

export default LocationHeader
