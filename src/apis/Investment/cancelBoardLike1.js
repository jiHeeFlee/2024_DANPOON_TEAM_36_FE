import { axiosAuthClient } from "../axios";

export const cancelBoardLike1 = async (id) => {
  try {
    return await axiosAuthClient.post(
      `/v1/api/board/investment/cancel?boardId=${id}`
    );
  } catch (error) {
    throw new Error("cancelBoardLike1 에러");
  }
};
