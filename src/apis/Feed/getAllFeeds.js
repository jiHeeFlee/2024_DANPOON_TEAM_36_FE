import { axiosAuthClient } from "../axios";

export const getAllFeeds = async () => {
  try {
    return await axiosAuthClient.get(`/v1/api/feed`);
  } catch (error) {
    throw new Error("getAllFeeds 에러");
  }
};
