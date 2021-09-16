import React, { useState } from 'react'

function CreateLocationForm(props) {

  

    const { locationToEdit } = props

    const value = {};

    locationToEdit.forEach(element => {
        value.title = element.title
        value.tag = element.tag
        value.description = element.description
    });

    const [datos, setDatos] = useState({
        id: '',
        title: '',
        type: '',
        pictures: '',
        description: '',
        latLng: ''
    })

    const submited = (e) => {

        e.preventDefault();

        const { title, type, description, pictures, latLng, } = datos;

        if (!title && !type && !description && !latLng && !pictures) {
            console.log('Rellena todos los campos');
            return
        }

        console.log('En el formulario', datos)
        props.editLocation(datos);
        setDatos({})
    }

    const handleInput = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
            id: props.id
        })

    };


    return (
        <div>
        <br/>
        <br/>
            <form encType="multipart/form-data" className="formulario" onSubmit={submited}>
                <label>Titulo</label>
                <input type="text" name="title" value={value.title} onChange={handleInput} />
                <br />
                <label>Tag</label>
                <input type="text" name="type" onChange={handleInput} />
                <br />
                <label>pictures</label>
                <input type="file" multiple name="pictures" onChange={handleInput} />
                <br />
                <label>Descripcion</label>
                <input type="text" name="description" value={value.description} onChange={handleInput} />
                <br />
                <label>Unicacion</label>
                <input type="text" name="latLng" onChange={handleInput} />
                <br />
                <button >Enviar</button>
            </form>
        </div>
    )
}

export default CreateLocationForm
