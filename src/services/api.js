import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-grupo-2.herokuapp.com",
});

export default api;
