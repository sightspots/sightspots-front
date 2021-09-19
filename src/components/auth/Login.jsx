import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { loginPost } from '../../api/loginPost';
import Button from '../ui/Button';

function Login({ isAuth, setUser, setAdmin, location }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        <div className="Container">
            <div className="Formulario">
                <div className="Formulario__header">
                    <h1 className="Formulario__title">Entra en tu cuenta de SightSpots</h1>
                    <Link to='/register'><p className="Formulario__link"> O registrate en SightSpots gratis</p></Link>
                </div>
                <form className="Formulario__container" onSubmit={handleSubmit}>
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
                    <Button type='submit' name={'Login'} />
                </form>
            </div>
        </div>
    );
}

export default Login;