import { axiosAuthClient, axiosAuthClientMulti } from "../axios";

export const updateBoard = async (id, data) => {
  try {
    return await axiosAuthClientMulti.put(`/v1/api/board/${id}`, data);
  } catch (error) {
    console.log("updateBoard 에러");
  }
};
