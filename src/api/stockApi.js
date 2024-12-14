import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const url = `${API_BASE_URL}/stock-data`;

export const fetchStockData = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};