import axios from "axios";
import { toast } from "react-toastify";

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },

  async (e) => {
    const origRequest = e.config;
    origRequest._isRetry = true;

    if (e.response.status === 401 && e.config && !e.config._isRetry) {
      try {
        const res = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", res.data.accessToken);

        return $api.request(origRequest);
      } catch (e) {
        toast("НЕ АВТОРИЗОВАН");
      }
    }
    throw e;
  }
);

export default $api;
