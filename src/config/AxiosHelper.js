
import axios from "axios";

export const baseURL = import.meta.env.VITE_API_BASE_URL; // NO quotes!
export const httpClient = axios.create({
    baseURL: baseURL,
});
