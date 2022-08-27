import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://localhost:7071/api",
});

axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosClient;
