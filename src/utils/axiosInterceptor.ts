import axios, { AxiosResponse, AxiosError } from "axios";

// create instance
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (
      error.response?.status == 403 &&
      error.response?.status > 199 &&
      error.response?.status < 300
    ) {
      return Promise.reject(error.response.data);
    }
    // return Error object with Promise
    return Promise.reject(error.response);
  }
);

export default instance;
