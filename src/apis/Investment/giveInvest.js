import { axiosAuthClient } from "../axios";

export const giveInvest = async (id) => {
  try {
    return await axiosAuthClient.post(
      `/v1/api/board/investment/invest?boardId=${id}`,
      null,
      {}
    );
  } catch (error) {
    console.error(error);
  }
};
