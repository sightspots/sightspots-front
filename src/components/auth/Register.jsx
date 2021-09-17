import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { registerPost } from '../../api/registerPost';

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
        <div>
            <h1>Crea tu cuenta de SightSpots</h1>
            <form encType="multipart/form-data" onSubmit={handleSubmit} className="formulario">
                <label><p>Nombre</p>
                    <input
                        name="name"
                        onChange={handleInput}
                        type="text"
                        placeholder="Nombre"
                    />
                </label>
                <label><p>Apellido(s)</p>
                    <input
                        name="surname"
                        onChange={handleInput}
                        type="text"
                        placeholder="Apellidos"
                    />
                </label>
                <label><p>E-mail</p>
                    <input
                        name="email"
                        onChange={handleInput}
                        type="text"
                        placeholder="E-mail"
                    />
                </label>
                <label><p>Contraseña</p>
                    <input
                        name="password"
                        onChange={handleInput}
                        type="password"
                        placeholder="Contraseña"
                    />
                </label>
                <label><p>Avatar</p>
                    <input
                        name="avatar"
                        onChange={handleFile}
                        type="file"
                    />
                </label>
                <button>Regístrame</button>
            </form>
            <div><p>Si ya tienes cuenta en SightSpots, puedes <Link to='/login'>loguearte</Link>.</p></div>
        </div>
    );
}

export default Register;