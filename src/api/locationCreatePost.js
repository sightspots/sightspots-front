import axios from 'axios';

export const locationCreatePost = async (valores) => {
    const { title, type, description, pictures, latLng } = valores.props;
    const baseURL = 'http://localhost:4000';

    // console.log('VALORES en locationCreatePost', valores);
    // console.log('VALORES.PROPS en locationCreatePost', valores.props);

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
        console.log('LOCATION SUBIDA EN API', location);

        return location
    } catch (error) {
        console.log(error)
    }
}