import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const url = `${API_BASE_URL}/wake-up`;

export const wakeUpServer = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};