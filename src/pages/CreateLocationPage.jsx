import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateLocationForm from '../components/forms/CreateLocationForm'
import { locationCreatePost } from '../api/locationCreatePost'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'


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
        <div className="Container">
            {isAdmin ?
                <div className="LocationForm">
                    <div className="LocationForm__header">
                        <h1 className="LocationForm__title">
                            <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '5px' }} />
                            Crear nueva localización
                        </h1>
                    </div>
                    <CreateLocationForm addLocation={addLocation} />
                </div>
                : <div className="LocationForm">
                    <div className="LocationForm__header">
                        <h1 className="LocationForm__title" style={{textAlign: 'center'}}>
                            <FontAwesomeIcon icon={faBan} style={{ marginRight: '5px' }} />
                            Acceso denegado
                        </h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateLocationPage
