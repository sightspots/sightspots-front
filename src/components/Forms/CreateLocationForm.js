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

        if (!title || !type || !description || !latLng || !pictures) {
            console.log('Rellena todos los campos');
            return
        }

        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('type', type);
        formData.append('latLng', latLng);
        for (const key of Object.keys(pictures)) {
            formData.append('pictures', pictures[key]);
        }

        props.addLocation(formData);

        setDatos({});

        await getLocations();

        return history.goBack();
    }

    const handleInput = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        })
    };

    const handleFile = (event) => {
        setDatos({
            ...datos,
            pictures: [...datos.pictures, ...event.target.files],
        })
    };

    const handleSelect = (event) => {
        setDatos({
            ...datos,
            type: event.target.value,
        })
    };
    
    return (
        <div>
            <form encType="multipart/form-data" className="formulario" onSubmit={submitted}>
                <label>Título</label>
                <input type="text" name="title" onChange={handleInput} />
                <br />
                <label>Tipo</label>
                <select name="type" onChange={handleSelect}>
                    <option value="naturaleza">Naturaleza</option>
                    <option value="construcción civil">Construcción civil</option>
                    <option value="construcción religiosa">Construcción religiosa</option>
                    <option value="galería de arte">Galería de arte</option>
                    <option value="jardín botánico">Jardín botánico</option>
                    <option value="zoológico">Zoológico</option>
                    <option value="monumento">Monumento</option>
                </select>
                <br />
                <label>Imágenes</label>
                <input type="file" name="pictures" multiple onChange={handleFile} />
                <br />
                <label>Descripción</label>
                <textarea name="description" onChange={handleInput} />
                <br />
                <label>Ubicación</label>
                <input type="text" name="latLng" onChange={handleInput} />
                <br />
                <button>Enviar</button>
            </form >
        </div >
    )
}

export default CreateLocationForm
