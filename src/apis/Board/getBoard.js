import { axiosAuthClient } from "../axios";

export const getBoard = async (id) => {
  try {
    return await axiosAuthClient.get(`/v1/api/board/${id}`);
  } catch (error) {
    console.error("getBoard 에러");
  }
};
