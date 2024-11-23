import axios, { AxiosRequestConfig } from "axios";

export const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${process.env.REACT_APP_BASEURL}`,
});

//TODO
export const axiosAuthClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  baseURL: `${process.env.REACT_APP_BASEURL}`,
});

export const axiosAuthClientMulti = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  baseURL: `${process.env.REACT_APP_BASEURL}`,
});
