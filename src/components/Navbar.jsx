import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './auth/Logout';

function Navbar({ isAuth, logout }) {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <div>Inicio</div>
            </Link>
            <Link to='/user'>
                <div>Perfil</div>
            </Link>
            {isAuth ?
                null
                : <Link to="/login"><div>Login</div></Link>
            }
            {isAuth ?
                <Logout logout={logout} />
                : <Link to='/register'><div>Registrarse</div></Link>
            }
        </nav>
    );
}

export default Navbar;