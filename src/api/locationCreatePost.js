import axios from 'axios';

export const locationCreatePost = async (valores) => {
    const baseURL = 'http://localhost:4000';

    // console.log('VALORES en locationCreatePost', valores);
    // console.log('VALORES.PROPS en locationCreatePost', valores.props);

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