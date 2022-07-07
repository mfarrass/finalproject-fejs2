import axios from "axios";

const API = axios.create({
  baseURL: "https://second-hand-staging.herokuapp.com/",
});

export default API;
