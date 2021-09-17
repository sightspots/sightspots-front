import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../auth/Logout';

function Navbar({ isAuth, isAdmin, logout }) {
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar__link'>
                <div>Inicio</div>
            </Link>
            <Link to='/user' className='navbar__link'>
                <div>Perfil</div>
            </Link>
            {isAuth && isAdmin ?
                <Link to='/admin' className='navbar__link'>
                    <div>Panel de admin</div>
                </Link>
                : null
            }
            {isAuth ?
                null
                : <Link to='/login' className='navbar__link'><div>Login</div></Link>
            }
            {isAuth ?
                <Logout logout={logout} />
                : <Link to='/register' className='navbar__link'><div>Registrarse</div></Link>
            }
        </nav>
    );
}

export default Navbar;