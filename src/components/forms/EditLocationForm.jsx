import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Button from '../ui/Button';

function EditLocationForm(props) {


    const { locationToEdit } = props
    const history = useHistory();
    const value = {};

    console.log('LOCATION TO EDIT', locationToEdit);

    locationToEdit.forEach(element => {
        value.title = element.title
        value.audio = element.audio
        value.visitingHours = element.visitingHours
        value.type = element.type
        value.latLng = element.latLng
        value.description = element.description
    });

    const [datos, setDatos] = useState({
        title: '',
        type: '',
        audio: '',
        visitingHours: '',
        pictures: [],
        description: '',
        latLng: ''
    })

    const submitted = (e) => {
        e.preventDefault();

        const { title, type, description, visitingHours, audio, latLng, pictures } = datos

        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('type', type);
        formData.append('visitingHours', visitingHours);
        formData.append('audio', audio);
        formData.append('latLng', latLng);
        for (const key of Object.keys(pictures)) {
            formData.append('pictures', pictures[key]);
        }

        props.editLocation(formData);
        setDatos({})

        return setTimeout(() => {
            history.goBack();
        }, 1400);

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
            <form encType="multipart/form-data" className="Formulario__container" onSubmit={submitted}>

                <div className="Formulario__inputBox">
                    <input
                        className="Formulario__input"
                        type="text"
                        name="title"
                        value={datos.title === '' ? value.title : datos.title}
                        onChange={handleInput} />
                </div>

                <div className="Formulario__inputBox">
                    <select className="Formulario__input" name="type" onChange={handleSelect}>
                        <option value="naturaleza">Naturaleza</option>
                        <option selected value="construcci??n civil">Construcci??n civil</option>
                        <option value="construcci??n religiosa">Construcci??n religiosa</option>
                        <option value="galer??a de arte">Galer??a de arte</option>
                        <option value="jard??n bot??nico">Jard??n bot??nico</option>
                        <option value="zool??gico">Zool??gico</option>
                        <option value="monumento">Monumento</option>
                    </select>
                </div>
                <div className="Formulario__inputBox">
                    <input
                        multiple
                        className="Formulario__input"
                        type="file"
                        name="pictures"
                        onChange={handleFile} />
                </div>
                <div className="Formulario__inputBox">
                    <input
                        className="Formulario__input"
                        placeholder="Horario"
                        type="text"
                        name="visitingHours"
                        value={datos.visitingHours === '' ? value.visitingHours : datos.visitingHours}
                        onChange={handleInput}
                    />
                </div>
                <div className="Formulario__inputBox">
                    <input
                        className="Formulario__input"
                        placeholder="Ubicaci??n"
                        type="text"
                        name="latLng"
                        value={datos.latLng === '' ? value.latLng : datos.latLng}
                        onChange={handleInput}
                    />
                </div>
                <div className="Formulario__inputBox">
                    <input
                        className="Formulario__input"
                        placeholder="Audio"
                        type="text"
                        name="audio"
                        value={datos.audio === '' ? value.audio : datos.audio}
                        onChange={handleInput}
                    />
                </div>
                <div className="Formulario__textareaBox">
                    <textarea 
                        className="Formulario__special"
                        type="text"
                        name="description"
                        value={datos.description === '' ? value.description : datos.description}
                        onChange={handleInput}
                    />
                </div>
                <Button type='submit' name={'Guardar'} />
            </form>
        </div>
    )
}

export default EditLocationForm