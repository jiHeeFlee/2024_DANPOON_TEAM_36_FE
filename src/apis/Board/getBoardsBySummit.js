import { axiosAuthClient } from "../axios";

export const getBoardsBySummit = async (id) => {
  try {
    return await axiosAuthClient.get(`/v1/api/board/summit/${id}/list`);
  } catch (error) {
    console.error(error);
  }
};
