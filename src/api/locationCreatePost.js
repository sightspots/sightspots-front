import axios from 'axios';

export const locationCreatePost = async (valores) => {

    const { title, type, description, pictures, latLng } = valores.props;

    const baseURL = 'http://localhost:4000';

    console.log('ULTIMO CONSOLE', valores.props);

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
        console.log('LOCATION en locationCreatePost', location);
        return location

    } catch (error) {
        console.log(error)
    }
}