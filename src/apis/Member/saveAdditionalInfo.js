import { axiosAuthClient } from "../axios";

export const saveAdditionalInfo = async (data) => {
  try {
    return await axiosAuthClient.post(
      `/v1/api/member/saveAdditionalInfo`,
      data
    );
  } catch (error) {
    throw new Error("saveAdditionalInfo 에러");
  }
};
