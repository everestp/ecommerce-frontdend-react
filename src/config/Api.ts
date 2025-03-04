import axios from "axios";

export const API_URL = "http://localhost:5454"; // Corrected typo in URL

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json" // Corrected 'header' to 'headers'
  }
});
