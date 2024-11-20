import { axiosAuthClient } from "../axios";

export const isValidModel = async () => {
  try {
    return await axiosAuthClient.get(`/v1/api/chatGpt/model`);
  } catch (error) {
    throw new Error("isValidModel 에러");
  }
};
