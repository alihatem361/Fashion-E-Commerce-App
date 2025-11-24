import { API_CONFIG } from "@/constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Add token to requests
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear storage
      await AsyncStorage.multiRemove(["authToken", "userData"]);
    }
    return Promise.reject(error);
  }
);

export default api;
