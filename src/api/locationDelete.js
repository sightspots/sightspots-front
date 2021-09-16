import axios from 'axios';

export const locationDelete = async (id) => {
  const baseURL = "http://localhost:4000";


  try {
    const response = await axios({
      url: `${baseURL}/admin/delete/${id}`,
      method: "DELETE"
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};