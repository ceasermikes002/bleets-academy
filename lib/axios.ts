import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
})

let authToken: string | null = null;

export const setAuthToken = (token: string | null) => {
  authToken = token;
}

export const getAuthHeader = () => {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
}

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance
