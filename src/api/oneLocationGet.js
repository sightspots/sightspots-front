import axios from 'axios'

export const oneGetLocation = async (id) => {
    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/locations/${id}`,
            method: 'GET',
        });

        const location = response.data;
        return location

    } catch (error) {
        console.log(error)
    }
}