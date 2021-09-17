import React, { useState, useEffect } from 'react'
import CreateLocationForm from '../components/Forms/CreateLocationForm'
import { locationCreatePost } from '../api/locationCreatePost'

function CreateLocationPage({ isAdmin }) {
    const [datos, setDatos] = useState({});

    useEffect(() => {

        if (!datos.props) {
            return
        }

        locationCreatePost(datos);        
    }, [datos])

    const addLocation = (props) => {
        const newDatas = { ...datos, props };
        setDatos(newDatas);
    }

    return (
        <div>
            {isAdmin ?
                <div>
                    <h1>Crear nueva localización</h1>
                    <CreateLocationForm addLocation={addLocation} />
                </div>
                : <h1>Acceso denegado</h1>
            }
        </div>
    )
}

export default CreateLocationPage
