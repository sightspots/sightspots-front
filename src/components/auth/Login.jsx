import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { loginPost } from '../../api/loginPost';

function Login({ isAuth, setUser, setAdmin, location }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        try {
            const user = await loginPost({ email, password });
            setUser(user);

            if (user.role === 'admin') {
                setAdmin(true);
            } else {
                setAdmin(false);
            }

        } catch (error) {
            alert('No has podido loguearte.');
            setEmail('');
            setPassword('');
        }
    };

    const { from } = location.state || { from: { pathname: '/' } };
    if (isAuth) return <Redirect to={from} />;

    return (
        <div className="Formulario">
            <div className="Formulario__header">
                <h1 className="Formulario__title">Entra en tu cuenta de SightSpots</h1>
                <Link  to='/register'><p className="Formulario__link"> O registrate en SightSpots gratis</p></Link>
            </div>
            <div className="Formulario__container">
                <div className="Formulario__inputBox">
                    <input
                        value={email}
                        onChange={({ target: { value } }) => setEmail(value)}
                        type='text'
                        placeholder='E-mail'
                        className="Formulario__input"
                    />
                </div>
                <div className="Formulario__inputBox">
                    <input
                        value={password}
                        onChange={({ target: { value } }) => setPassword(value)}
                        type='password'
                        placeholder='Contraseña'
                        className="Formulario__input"
                    />
                </div>
                <button className="Formulario__button" onClick={handleClick}>Login</button>
            </div>
        </div>
    );
}

export default Login;