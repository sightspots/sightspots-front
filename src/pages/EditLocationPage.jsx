import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditLocationForm from '../components/forms/EditLocationForm'
import { locationEditPut } from '../api/locationEditPut'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'

function EditLocationPage(props) {
    const { id } = props.match.params
    const { isAdmin } = props

    let locationsStorage = JSON.parse(window.localStorage.getItem("locations"))

    let locationToEdit = locationsStorage.filter(location => location._id === id)

    console.log('LocalStorage', locationToEdit)

    const [datos, setDatos] = useState({});

    useEffect(() => {
        if (!datos.props) {
            return
        }

        console.log('Peticion edit')
        locationEditPut(id, datos);

        return () => {
            console.log('Desmontando')
        }
    }, [datos])

    const editLocation = (props) => {
        const newDatas = { ...datos, props };
        setDatos(newDatas);
    }


    return (
        <>
            {isAdmin ?
                <div className="LocationForm">
                    <div className="LocationForm__header">
                        <h1 className="LocationForm__title">
                            <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '5px' }} />
                            Crear nueva localización
                        </h1>
                    </div>
                    <EditLocationForm locationToEdit={locationToEdit} editLocation={editLocation} id={id} />
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
        </>
    )
}

export default EditLocationPage
