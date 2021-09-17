import axios from 'axios';

export const locationCreatePost = async (valores) => {
    
    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/admin/create`,
            method: 'POST',
            data: valores.props,
        });

        const location = response.data;
        return location
    } catch (error) {
        console.log(error)
    }
}