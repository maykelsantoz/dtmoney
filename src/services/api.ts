import axios from 'axios';

const apiURL = "https://dtmoney-maykelsantoz.vercel.app"

export const api = axios.create({
  baseURL: apiURL,
})