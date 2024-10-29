import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND;


export const allData = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data; // Access data directly
    } catch (err) {
        console.error("Error in Retrieving Data:", err.response ? err.response.data : err);
        throw err;
    }
};