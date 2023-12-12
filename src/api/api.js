import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-fiberblu-dev-krzx.4.us-1.fl0.io/api/",
});

export default api;