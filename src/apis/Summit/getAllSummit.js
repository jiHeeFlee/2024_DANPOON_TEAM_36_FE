import { axiosAuthClient } from "../axios";

export const getAllSummit = async () => {
  try {
    return await axiosAuthClient.get(`/v1/api/summit`);
  } catch (error) {
    console.error(error);
  }
};
