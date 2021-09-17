import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
            <h1>Login</h1>
            <input
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                type='text'
                placeholder='E-mail'
            />
            <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type='password'
                placeholder='Contraseña'
            />
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Login;