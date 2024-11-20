import { axiosAuthClient } from "../axios";

export const deleteFeed = async (id) => {
  try {
    return await axiosAuthClient.delete(`/v1/api/feed/${id}`);
  } catch (error) {
    throw new Error("deleteFeed 에러");
  }
};
