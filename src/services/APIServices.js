import axios from "axios";

export const API = () => {
  return axios.create({
    baseURL: "https://exchangeratesapi.io/api/",
    timeout: 120000,
    headers: {
      Accept: "application/json",
      Content: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
