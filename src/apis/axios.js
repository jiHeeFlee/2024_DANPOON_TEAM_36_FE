import axios, { AxiosRequestConfig } from "axios";

export const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

//TODO
export const axiosAuthClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: "INPUT_AUTH_TOKEN",
  },
});
