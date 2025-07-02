// /src/services/baseInstance.ts
import axios from "axios";

const { VITE_BASIC_AUTH_USERNAME, VITE_BASIC_AUTH_PASSWORD } = import.meta.env;

// Axios instance
const baseInstance = axios.create({
  baseURL: "https://middlewareapi.lkp.net.in/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(
      `${VITE_BASIC_AUTH_USERNAME}:${VITE_BASIC_AUTH_PASSWORD}`
    )}`,
  },
});

export default baseInstance;
