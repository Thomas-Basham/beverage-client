import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BEVERAGE_API_URL,
  timeout: 500000,
  headers: { "api-key": process.env.NEXT_PUBLIC_BEVERAGE_API_KEY },
});

export default instance;
