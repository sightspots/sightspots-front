import React from 'react';

function UserPage({ user }) {
    const { email, password, name, role } = user || {};

    return (
        <div>
            <h1>Perfil de usuario</h1>
            <p>Email: {email}</p>
            <p>Contraseña: {password}</p>
            <p>Nombre: {name}</p>
            <p>Rol: {role}</p>
        </div>
    );
}

export default UserPage;