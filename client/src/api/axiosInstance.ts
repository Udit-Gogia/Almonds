import axios from "axios";

const api = axios.create({
  baseURL: "https://almonds-qixm.onrender.com",
  // baseURL: "http://localhost:8000/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
