import { axiosAuthClient } from "../axios";

export const getSummit = async (id) => {
  try {
    return await axiosAuthClient.get(`/v1/api/summit/${id}`);
  } catch (error) {
    console.error(error);
  }
};
