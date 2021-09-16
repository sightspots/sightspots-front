import React, { useState } from 'react'

function CreateLocationForm(props) {

    const [datos, setDatos] = useState({
        title: '',
        type: '',
        pictures: '',
        description: '',
        latLng: ''
    })

    const submited = (e) => {

        e.preventDefault();

        const { title, type, description, pictures, latLng } = datos;

        if (!title && !type && !description && !latLng && !pictures) {
            console.log('Rellena todos los campos');
            return
        }

        console.log('en form create', datos)
        props.addLocation(datos);
        setDatos({})
    }

    const handleInput = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    };

    // TODO: El formulario no recoge las imágenes. Habrá que trastear en la petición (en /api) (también en el form de editar).
    // TODO: Hay que hacer el select para type (también en el form de editar).
    // TODO: Al crear location, hay que redirigir a la location creada (también en el form de editar).

    return (
        <div>
        <br/>
        <br/>
        <br/>
            <form encType="multipart/form-data" className="formulario" onSubmit={submited}>
                <label>Titulo</label>
                <input type="text" name="title" onChange={handleInput} />
                <br />
                <label>Tag</label>
                <input type="text" name="type" onChange={handleInput} />
                <br />
                <label>pictures</label>
                <input type="file" name="pictures" onChange={handleInput} />
                <br />
                <label>Descripcion</label>
                <input type="text" name="description" onChange={handleInput} />
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
