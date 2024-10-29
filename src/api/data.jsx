import axios from 'axios';



export const allData = async () => {
    try {
        const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        return response.data; // Access data directly
    } catch (err) {
        console.error("Error in Retrieving Data:", err.response ? err.response.data : err);
        throw err;
    }
};