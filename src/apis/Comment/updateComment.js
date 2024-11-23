import { axiosAuthClient } from "../axios";

export const updateComment = async (id, data) => {
  try {
    return await axiosAuthClient.put(`/v1/api/comment/${id}`, data);
  } catch (error) {
    throw new Error("updateComment 에러");
  }
};
