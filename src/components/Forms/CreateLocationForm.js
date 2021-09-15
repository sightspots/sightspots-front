import React from 'react'

function CreateLocationForm() {

    const [datos, setDatos] = useState({
        title: '',
        type: '',
        description: '',
        latLng: ''
    })

    const submited = (e) => {

        e.preventDefault();

        const { name, date, message, done } = datos;

        if (!name && !date && !message && !done) {
            console.log('Rellena todos los campos');
            return
        }

        console.log('en form', datos)
        props.addPost(datos);
        setDatos({})
    }

    const handleInput = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    };


    return (
        <div>
            <form className="formulario" onSubmit={submited}>
                <label>Nombre</label>
                <input type="text" name="title" onChange={handleInput} />
                <br />
                <label>Fecha</label>
                <input type="date" name="date" onChange={handleInput} />
                <br />
                <label>Mensaje</label>
                <input type="text" name="message" onChange={handleInput} />
                <br />
                <label>Hecho¿?</label>
                <select name="done" id="cars" onChange={handleInput}>
                    <option value="true">Si</option>
                    <option value="true">No</option>
                </select>
                <br />
                <button >Enviar</button>
            </form>
        </div>
    )
}

export default CreateLocationForm
