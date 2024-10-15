import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000/",
  baseURL: "https://almonds-lieq.vercel.app/",

  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
