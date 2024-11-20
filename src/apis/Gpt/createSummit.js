import { axiosAuthClient } from "../axios";

export const createSummit = async () => {
  try {
    return await axiosAuthClient.post(`/v1/api/chatGpt/summit`, null, {});
  } catch (error) {
    throw new Error("createSummit 에러");
  }
};
