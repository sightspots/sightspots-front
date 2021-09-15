import axios from 'axios'

export const locationCreatePost = async (valores) => {

    console.log('En la pagina de crear', valores)

    const { title, type, description, pictures, latLng } = valores.props;

    const baseURL = 'http://localhost:4000';

    console.log(valores.props)

    try {
        const response = await axios({
            url: `${baseURL}/admin/create`,
            method: 'POST',
            data: {
                title, 
                type, 
                pictures,
                description, 
                latLng
              }
        });

        const location = response.data;
        console.log(location)
        return location

    } catch (error) {
        console.log(error)
    }
}