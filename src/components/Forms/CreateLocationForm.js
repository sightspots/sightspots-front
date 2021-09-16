import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { getLocations } from "../../api/locationsGet";

function CreateLocationForm(props) {
    const [datos, setDatos] = useState({
        title: '',
        type: '',
        pictures: '',
        description: '',
        latLng: ''
    })

    const history = useHistory();

    const submitted = async (e) => {
        e.preventDefault();

        const { title, type, description, pictures, latLng } = datos;

        if (!title && !type && !description && !latLng && !pictures) {
            console.log('Rellena todos los campos');
            return
        }

        console.log('en form create', datos)
        props.addLocation(datos);
        setDatos({});
        await getLocations();

        return history.goBack();
    }

    const handleInput = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    };

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
                <input type="file" name="pictures" onChange={handleInput} />
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
