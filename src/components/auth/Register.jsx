import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { registerPost } from '../../api/registerPost';
import Button from '../ui/Button';

function Register({ isAuth, setUser }) {
    const [registerFormValues, setRegisterFormValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        avatar: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, surname, email, password, avatar } = registerFormValues;

        if (!name || !email || !password) {
            console.log('Los campos obligatorios son: nombre, e-mail y contraseña.');
            return
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('surname', surname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('avatar', avatar);

        try {
            const user = await registerPost(formData);
            setUser(user);
        } catch (error) {
            alert('No has podido registrarte.');
        }
    };

    const handleInput = (event) => {
        setRegisterFormValues({
            ...registerFormValues,
            [event.target.name]: event.target.value,
        })
    };

    const handleFile = (event) => {
        setRegisterFormValues({
            ...registerFormValues,
            avatar: event.target.files[0],
        });
    };

    if (isAuth) return <Redirect to='/' />;

    return (
        <div className="Container">
            <div className="Formulario">
                <div className="Formulario__header">
                    <h1 className="Formulario__title">Crea tu cuenta de SightSpots</h1>
                    <Link  to='/login'><p className="Formulario__link">Si ya eres de la familia logueate</p></Link>
                </div>
                <form className="Formulario__container" encType="multipart/form-data" onSubmit={handleSubmit}>
    
                    <div className="Formulario__inputBox">
                        <input
                            name="name"
                            onChange={handleInput}
                            type="text"
                            placeholder="Nombre"
                            className="Formulario__input"
                        />
                    </div>
                    <div className="Formulario__inputBox">
                        <input
                            name="surname"
                            onChange={handleInput}
                            type="text"
                            placeholder="Apellidos"
                            className="Formulario__input"
                        />
                    </div>
                    <div className="Formulario__inputBox">
                        <input
                            name="email"
                            onChange={handleInput}
                            type="text"
                            placeholder="E-mail"
                            className="Formulario__input"
                        />
                    </div>
                    <div className="Formulario__inputBox">
                        <input
                            name="password"
                            onChange={handleInput}
                            type="password"
                            placeholder="Contraseña"
                            className="Formulario__input"
                        />
                    </div>
                    <div className="Formulario__inputBox">
                        <input
                            name="avatar"
                            onChange={handleFile}
                            type="file"
                            className="Formulario__input"
                        />
                    </div>
                    <Button type='submit' name={'Regístrame'} />
                </form>
            </div>
        </div>
    );
}

export default Register;