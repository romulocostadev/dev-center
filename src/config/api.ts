import axios from 'axios';

const apiAxios = axios.create({
  baseURL: process.env.BASE_URL_BACKEND,
  timeout: 1000,
});

export const api = {
  get: <T>(url: string, params?: Record<string, unknown>) =>
    apiAxios.get<T>(url, {
      ...params,
    }),
  post: <T>(url: string, data: any) => apiAxios.post<T>(url, data, {}),
  patch: <T>(url: string, data: any) => apiAxios.patch<T>(url, data, {}),
  delete: <T>(url: string) => apiAxios.delete<T>(url, {}),
};
