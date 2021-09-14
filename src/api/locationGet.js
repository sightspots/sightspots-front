import axios from 'axios'

export const getLocations = async () => {

    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/locations`,
            method: 'GET',
        });

        const locations = response.data;
        console.log('LOCATIONS EN API', locations);
        return locations

    } catch (error) {
        console.log(error)
    }
}
