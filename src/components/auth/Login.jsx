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
        <div>
            <h1>Entra en tu cuenta de SightSpots</h1>
            <label><p>Introduce tu e-mail</p>
                <input
                    value={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                    type='text'
                    placeholder='E-mail'
                />
            </label>
            <label><p>Introduce tu contraseña</p>
                <input
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                    type='password'
                    placeholder='Contraseña'
                />
            </label>
            <button onClick={handleClick}>Login</button>
            <div><p>Si no tienes cuenta en SightSpots, puedes <Link to='/register'>registrarte</Link>.</p></div>
        </div>
    );
}

export default Login;