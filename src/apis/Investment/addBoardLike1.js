import { axiosAuthClient } from "../axios";

export const addBoardLike1 = async (id) => {
  try {
    return await axiosAuthClient.post(
      `/v1/api/board/investment/invest?boardId=${id}`
    );
  } catch (error) {
    throw new Error("addBoardLike1 에러");
  }
};
