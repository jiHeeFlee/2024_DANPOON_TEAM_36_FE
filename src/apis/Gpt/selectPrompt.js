import { axiosAuthClient } from "../axios";

export const selectPrompt = async (data) => {
  try {
    return await axiosAuthClient.post(`/v1/api/chatGpt/summit`, null, data);
  } catch (error) {
    throw new Error("selectPrompt 에러");
  }
};
