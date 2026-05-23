import axios, { AxiosInstance, AxiosError } from 'axios';

// Base URL for your backend server
const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000/api';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // Add auth token if available
        // const token = await getToken();
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle common errors
        if (error.response?.status === 401) {
          // Handle unauthorized
          console.log('Unauthorized - redirect to login');
        } else if (error.response?.status === 403) {
          // Handle forbidden
          console.log('Forbidden access');
        } else if (error.response?.status === 404) {
          // Handle not found
          console.log('Resource not found');
        } else if (error.response?.status === 500) {
          // Handle server error
          console.log('Server error');
        }
        return Promise.reject(error);
      }
    );
  }

  // GET request
  async get<T>(endpoint: string, config = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(endpoint, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // POST request
  async post<T>(endpoint: string, data = {}, config = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // PUT request
  async put<T>(endpoint: string, data = {}, config = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // PATCH request
  async patch<T>(endpoint: string, data = {}, config = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.patch<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // DELETE request
  async delete<T>(endpoint: string, config = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(endpoint, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();
