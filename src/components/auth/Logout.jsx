import React from 'react';
import { withRouter } from 'react-router-dom';

function Logout({ logout, history }) {
    const handleClick = () => {
        logout();
        history.push('/');
    };
    
    return (
        <div onClick={handleClick}>Logout</div>
    );
}

export default withRouter(Logout);