import React, { useState } from 'react'
import { useHistory } from 'react-router';

function CreateLocationForm(props) {
    const [datos, setDatos] = useState({
        title: '',
        type: '',
        description: '',
        visitingHours: '',
        pictures: '',
        latLng: '',
        audio: '',
    });

    const history = useHistory();

    const submitted = (e) => {
        e.preventDefault();

        const { title, type, description, visitingHours, pictures, latLng, audio } = datos;

        if (!title || !type || !description || !latLng) {
            console.log('Los campos obligatorios son: título, tipo, descripción y ubicación.');
            return
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('type', type);
        formData.append('description', description);
        formData.append('visitingHours', visitingHours);
        formData.append('latLng', latLng);
        formData.append('audio', audio);
        for (const key of Object.keys(pictures)) {
            formData.append('pictures', pictures[key]);
        }

        props.addLocation(formData);

        setDatos({});

        return setTimeout(() => {
            history.goBack();
        }, 1400);
    }

    const handleInput = (e) => {

        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
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
                    <option selected value="construcción civil">Construcción civil</option>
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
                <label>Horarios de visita</label>
                <input type="text" name="visitingHours" onChange={handleInput} />
                <br />
                <label>Ubicación</label>
                <input type="text" name="latLng" onChange={handleInput} />
                <br />
                <label>Audio</label>
                <input type="text" name="audio" onChange={handleInput} />
                <br />
                <button>Enviar</button>
            </form >
        </div >
    )
}

export default CreateLocationForm
