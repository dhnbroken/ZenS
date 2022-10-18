/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://634d93a5f34e1ed82679892c.mockapi.io',
  timeout: 10000000,
  headers: { 'content-type': 'application/json' }
});

export const getJokes = async () => {
  try {
    const response = await axiosInstance.get('/jokes');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
