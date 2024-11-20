import { axiosAuthClient } from "../axios";

export const cancelBoardLike = async (id) => {
  try {
    return await axiosAuthClient.post(
      `/v1/api/board/like/cancel?boardId=${id}`,
      {}
    );
  } catch (error) {
    throw new Error("cancelBoardLike 에러");
  }
};
