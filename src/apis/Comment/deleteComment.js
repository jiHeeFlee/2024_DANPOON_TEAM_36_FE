import { axiosAuthClient } from "../axios";

export const deleteComment = async (id) => {
  try {
    return await axiosAuthClient.delete(`/v1/api/comment/${id}`);
  } catch (error) {
    throw new Error("deleteComment 에러");
  }
};
