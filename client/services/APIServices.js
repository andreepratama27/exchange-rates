import axios from "axios";

export const API = () => {
  return axios.create({
    baseURL: "/api",
    timeout: 120000,
    headers: {
      Accept: "application/json",
      Content: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
