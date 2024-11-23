import { axiosAuthClient } from "../axios";

export const getMyInvest = async (userId, boardId) => {
  try {
    return await axiosAuthClient.get(
      `/v1/api/board/investment/get-investment?memberId=${userId}&boardId=${boardId}`
    );
  } catch (error) {
    console.error(error);
  }
};
