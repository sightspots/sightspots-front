import React, { useState, useEffect } from 'react'
import EditLocationForm from '../components/Forms/EditLocationForm'
import { locationEditPut } from '../api/locationEditPut'

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
        locationEditPut(datos);

        return () => {
            console.log('Desmontando')
        }
    }, [datos])

    const editLocation = (props) => {
        const newDatas = { ...datos, props };
        setDatos(newDatas);
    }


    return (
        <div>
            {isAdmin ?
                <div>
                    <h1>Editar localización</h1>
                    <EditLocationForm locationToEdit={locationToEdit} editLocation={editLocation} id={id} />
                </div>
                : <h1>Acceso denegado</h1>
            }
        </div>
    )
}

export default EditLocationPage
