import axios from 'axios';

export const registerPost = async (registerValues) => {
    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/auth/register`,
            method: 'POST',
            data: registerValues,
        });

        const user = response.data;
        return user

    } catch (error) {
        console.log(error)
    }
}