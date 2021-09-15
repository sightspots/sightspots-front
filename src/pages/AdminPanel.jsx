import React from 'react';

function AdminPanel({ isAuth, isAdmin, user }) {
    const { name } = user || {};

    return (
        <div>
            {isAuth && isAdmin === true ?
                <div>
                    <h1>Panel de administración</h1>
                    <p>Hola, {name}.</p>
                </div>
                : <h1>Acceso denegado</h1>
            }
        </div>
    );
}

export default AdminPanel;