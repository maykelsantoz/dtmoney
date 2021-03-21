import axios from 'axios';

//const apiURL = "https://localhost/api";

export const api = axios.create({
  baseURL: process.env.NODE_ENV,
})