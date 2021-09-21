import axios from 'axios'

export const locationEditPut = async (id, valores) => {
    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/admin/edit/${id}`,
            method: 'PUT',
            data: valores.props
        });

        const location = response.data;
        return location

    } catch (error) {
        console.log(error)
    }
}