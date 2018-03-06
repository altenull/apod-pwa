import axios from 'axios';

const {
  REACT_APP_APIKEY: apiKey
} = process.env;

export function getAPOD(currentDate = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`);
}