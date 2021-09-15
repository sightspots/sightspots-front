import axios from 'axios';

export const getUsers = async () => {
    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/user/users`,
            method: 'GET',
        });

        const users = response.data;
        return users

    } catch (error) {
        console.log(error)
    }
}
