import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCities = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/weather/cities?q=${query}`);
  return response.data.map(city => ({
    value: city.name,
    label: `${city.name}, ${city.country}`,
    city: city
  }));
};

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/current/${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/forecast/${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};