import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';


function Logout({ logout, history }) {
    const handleClick = () => {
        logout();
        history.push('/');
    };
    
    return (
        <div onClick={handleClick} className='Navbar__link'><FontAwesomeIcon className="Navbar__icon" icon={faDoorOpen} />Logout</div>
    );
}

export default withRouter(Logout);