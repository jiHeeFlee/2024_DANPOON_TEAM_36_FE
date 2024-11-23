import { axiosAuthClient } from "../axios";

export const getAllSummit = async (id) => {
  try {
    return await axiosAuthClient.get(`/v1/api/summit/id`);
  } catch (error) {
    console.error(error);
  }
};
