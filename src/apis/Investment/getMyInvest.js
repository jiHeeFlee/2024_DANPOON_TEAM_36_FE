import { axiosAuthClient } from "../axios";

export const getMyInvest = async (userId) => {
  try {
    return await axiosAuthClient.get(
      `/v1/api/board/investment/my-investments?memberId=${userId}`
    );
  } catch (error) {
    console.error(error);
  }
};
