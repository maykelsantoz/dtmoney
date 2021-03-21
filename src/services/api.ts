import axios from 'axios';

const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://dtmoney-maykelsantoz.vercel.app/api"
    : "http://localhost:3000/api";

export const api = axios.create({
  baseURL: apiURL,
})