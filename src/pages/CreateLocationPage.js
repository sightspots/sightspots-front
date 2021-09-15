import React, { useState, useEffect } from 'react'
import CreateLocationForm from '../components/Forms/CreateLocationForm'
import { locationCreatePost } from '../api/locationCreatePost'

function AdminCreateLocation() {

    const [datos, setDatos] = useState({});

    useEffect(() => {

        if (!datos.props) {
            return
        }

        console.log('Peticion post')
        locationCreatePost(datos);

        return () => {
            console.log('Desmontando')
        }
    }, [datos])

    const addLocation = (props) => {

        const newDatas = { ...datos, props };
        setDatos(newDatas);

    }


    return (
        <div>
            <br />
            <br />
            <h1>En la pagina de CREAR LOCATION</h1>
            <CreateLocationForm addLocation={addLocation} />
        </div>
    )
}

export default AdminCreateLocation
