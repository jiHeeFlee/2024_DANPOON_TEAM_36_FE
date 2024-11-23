import { axiosAuthClient } from "../axios";

export const getMyBoard = async (id) => {
  try {
    return await axiosAuthClient.get(`/v1/api/board/my?memberId=${id}`);
  } catch (error) {
    console.error("getBoardLike 에러");
  }
};
