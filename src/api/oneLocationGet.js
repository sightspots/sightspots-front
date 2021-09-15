import axios from 'axios'

export const oneGetLocation = async (props) => {

    const { id } = props

    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/admin/locations/${id}`,
            method: 'GET',
        });

        const location = response.data;
        console.log(location)
        return location

    } catch (error) {
        console.log(error)
    }
}