import axios from "axios";
export const baseURL = "https://vivi-backend-20o3.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,
});
