import { axiosAuthClient } from "../axios";

export const updateBoard = async (id, data) => {
  try {
    return await axiosAuthClient.put(`/v1/api/board/${id}`, data);

  } catch (error) {
    throw new Error("updateBoard 에러");
  }
};
