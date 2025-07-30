import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "https://uc-backend-production.up.railway.app",
});

export default API;
