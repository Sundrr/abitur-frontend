import Axios from 'axios';

let axiosInstance = null;
export const request = () => {
    if (!axiosInstance) {
        axiosInstance = Axios.create({
            baseURL: 'http://127.0.0.1:3000',
        });
    }
    return axiosInstance;
};

/* let axiosInstance = null;
export const request = () => {
  if (!axiosInstance) {
    if (process.env.NODE_ENV === 'development') {
      axiosInstance = Axios.create({
        baseURL: '/api',
        // baseURL: 'http://10.10.1.210:8000',
      });
    } else {
      axiosInstance = Axios.create({
        baseURL: `${window.$variables.apiUrl ? window.$variables.apiUrl : '/'}`,
      });
    }
  }
  return axiosInstance;
};
 */

export default {
    request,
};
