import { axiosAuthClient } from "../axios";

export const deleteBoard = async (id) => {
  try {
    return await axiosAuthClient.delete(`/v1/api/board/${id}`);
  } catch (error) {
    throw new Error("deleteBoard 에러");
  }
};
