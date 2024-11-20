import { axiosAuthClient } from "../axios";

export const addBoardLike = async (id) => {
  try {
    return await axiosAuthClient.post(
      `/v1/api/board/like/like?boardId=${id}`,
      {}
    );
  } catch (error) {
    throw new Error("addBoardLike 에러");
  }
};
