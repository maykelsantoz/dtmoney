import axios from 'axios';
//require("dotenv").config();

//const apiURL = "https://localhost/api";

export const api = axios.create({
  baseURL: "https://dtmoney-five.vercel.app",
})