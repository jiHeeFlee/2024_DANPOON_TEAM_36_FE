import { axiosAuthClient } from "../axios";

export const saveComment = async (data) => {
  try {
    return await axiosAuthClient.post(`/v1/api/comment`, data);
  } catch (error) {
    throw new Error("saveComment 에러");
  }
};
