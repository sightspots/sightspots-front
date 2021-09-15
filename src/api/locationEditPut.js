import axios from 'axios'

export const locationEditPut = async (valores) => {
    const { id, title, type, description, pictures, latLng } = valores.props;
    const baseURL = 'http://localhost:4000';

    console.log('VALORES en locationEditPut', valores);

    try {
        const response = await axios({
            url: `${baseURL}/admin/edit/${id}`,
            method: 'PUT',
            data: {
                title, 
                type, 
                pictures: [pictures],
                description, 
                latLng
              }
        });

        const location = response.data;
        console.log('Despues del PUT', location)
        return location

    } catch (error) {
        console.log(error)
    }
}