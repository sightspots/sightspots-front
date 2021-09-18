import React from 'react';
import ProfileHeader from '../components/ui/ProfileHeader';

function UserPage({ user }) {
    const { email, password, name, role } = user || {};

    return (
        <div>
            <ProfileHeader user={user} />
            <p>Email: {email}</p>
            <p>Contraseña: {password}</p>
            <p>Nombre: {name}</p>
            <p>Rol: {role}</p>
        </div>
    );
}

export default UserPage;