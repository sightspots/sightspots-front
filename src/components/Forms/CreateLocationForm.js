import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { getLocations } from "../../api/locationsGet";

function CreateLocationForm(props) {
    const [datos, setDatos] = useState({
        title: '',
        type: '',
        pictures: [],
        description: '',
        latLng: ''
    })

    const history = useHistory();

    const submitted = async (e) => {
        e.preventDefault();

        console.log('Formulario', datos)

        props.addLocation(datos);
        setDatos({});
        await getLocations();

        return history.goBack();
    }

    const handleInput = (e) => {

        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    };

    const handleFiles = (e) => {
        setDatos({...datos, 'pictures': e.target.files})
    }


    // TODO: El formulario no recoge las imágenes. Habrá que trastear en la petición (en /api) (también en el form de editar).
    // TODO: Hay que hacer el select para type (también en el form de editar).

    return (
        <div>
            <form encType="multipart/form-data" className="formulario" onSubmit={submitted}>
                <label>Título</label>
                <input type="text" name="title" onChange={handleInput} />
                <br />
                <label>Tipo</label>
                <input type="text" name="type" onChange={handleInput} />
                <br />
                <label>Imágenes</label>
                <input type="file" multiple onChange={handleFiles} />
                <br />
                <label>Descripción</label>
                <input type="text" name="description" onChange={handleInput} />
                <br />
                <label>Ubicación</label>
                <input type="text" name="latLng" onChange={handleInput} />
                <br />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default CreateLocationForm
