import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Button from '../ui/Button';

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
            <form encType="multipart/form-data" className="Formulario__container" onSubmit={submitted}>

                <div className="Formulario__inputBox">
                    <input className="Formulario__input" type="text" name="title" placeholder="Título" onChange={handleInput} />
                </div>
                <div className="Formulario__inputBox">
                    <select className="Formulario__input" name="type" onChange={handleSelect}>
                        <option value="naturaleza">Naturaleza</option>
                        <option value="construcción civil">Construcción civil</option>
                        <option value="construcción religiosa">Construcción religiosa</option>
                        <option value="galería de arte">Galería de arte</option>
                        <option value="jardín botánico">Jardín botánico</option>
                        <option value="zoológico">Zoológico</option>
                        <option value="monumento">Monumento</option>
                    </select>
                </div>
                <div className="Formulario__inputBox">
                    <input className="Formulario__input" type="file" name="pictures" multiple onChange={handleFile} />
                </div>
                <div className="Formulario__inputBox">
                    <input className="Formulario__input" placeholder="Horario" type="text" name="visitingHours" onChange={handleInput} />
                </div>
                <div className="Formulario__inputBox">
                    <input className="Formulario__input" placeholder="Ubicación" type="text" name="latLng" onChange={handleInput} />
                </div>
                <div className="Formulario__inputBox">
                    <input className="Formulario__input" placeholder="Audio" type="text" name="audio" onChange={handleInput} />
                </div>
                <div className="Formulario__textareaBox">
                    <textarea className="Formulario__textarea" placeholder="Descripción" name="description" onChange={handleInput} />
                </div>
                <Button type='submit' name={'Crear'} />
            </form >
        </div >
    )
}

export default CreateLocationForm
