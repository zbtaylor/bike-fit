import axios from "axios";
import { Redirect } from "react-router-dom";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.authorization = token;
  return config;
});

axios.interceptors.response.use(
  res => {
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  },
  err => {
    console.log(err.response);
    if (err.response.data.tokenExpired) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
    }
  }
);
