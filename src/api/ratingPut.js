import axios from 'axios';

export const ratingPut = async (id) => {
    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/locations/${id}/rating`,
            method: 'PUT',
        });

        const updatedLocation = response.data;
        return updatedLocation

    } catch (error) {
        console.log(error)
    }
}