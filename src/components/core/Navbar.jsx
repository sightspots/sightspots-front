import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMapMarkedAlt, faUserShield, faSignInAlt, faKiwiBird, faTimes, faCompass } from '@fortawesome/free-solid-svg-icons';
import { faCompass as regular } from '@fortawesome/free-regular-svg-icons';
import Logout from '../auth/Logout';

function Navbar({ isAuth, isAdmin, logout }) {

    const [navbar, setNavbar] = useState(false);

    const handleNavbar = () => {
        navbar !== true ? setNavbar(true) : setNavbar(false);
    }

    let active = '';
    navbar ? active = 'active' : active = '';

    return (
        <nav className="Navbar">
            <div className="Navbar__header">
                <Link to='/'><FontAwesomeIcon className="Navbar__icon-logo" icon={regular} /></Link>
            </div>
            <FontAwesomeIcon className="Navbar__icon-special" onClick={handleNavbar} icon={active ? faTimes : faBars} />
            <div className={`Navbar__block bg-1 ${active}`}>
                <div className="Navbar__links">
                    <Link onClick={handleNavbar} to='/' className='Navbar__link'><span className="Navbar__iconBox"><FontAwesomeIcon className="Navbar__icon" icon={faCompass} /></span>Home</Link>
                    <Link onClick={handleNavbar} to='/user' className='Navbar__link'><span className="Navbar__iconBox"><FontAwesomeIcon className="Navbar__icon" icon={faUser} /></span>Perfil</Link>
                    <Link onClick={handleNavbar} to='/map' className='Navbar__link'><span className="Navbar__iconBox"><FontAwesomeIcon className="Navbar__icon" icon={faMapMarkedAlt} /></span>Mapa</Link>
                    {isAuth && isAdmin ?
                        <Link onClick={handleNavbar} to='/admin' className='Navbar__link'><span className="Navbar__iconBox"><FontAwesomeIcon className="Navbar__icon" icon={faUserShield} /></span>Admin</Link>
                        : null
                    }
                    {isAuth ?
                        null
                        : <Link onClick={handleNavbar} to='/login' className='Navbar__link'><span className="Navbar__iconBox"><FontAwesomeIcon className="Navbar__icon" icon={faSignInAlt} /></span>Login</Link>
                    }
                    {isAuth ?
                        <Logout logout={logout} /> : <Link onClick={handleNavbar} to='/register' className='Navbar__link'><span className="Navbar__iconBox"><FontAwesomeIcon className="Navbar__icon" icon={faKiwiBird} /></span>Registrarse</Link>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;