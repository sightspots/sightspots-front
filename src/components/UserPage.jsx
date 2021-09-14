import React from 'react';

function UserPage({ user }) {
    const { email, password, name } = user || {};

    return (
        <div>
            <h1>Perfil de usuario</h1>
            <dt>Email</dt>
            <dd>{email}</dd>
            <dt>Contraseña</dt>
            <dd>{password}</dd>
            <dt>Nombre</dt>
            <dd>{name}</dd>
        </div>
    );
}

export default UserPage;