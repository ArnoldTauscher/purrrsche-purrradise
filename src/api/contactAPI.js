import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const url = `${API_BASE_URL}/contact`;

export const submitContactAPI = (contactData) => {
  return axios.post(url, contactData);
};
