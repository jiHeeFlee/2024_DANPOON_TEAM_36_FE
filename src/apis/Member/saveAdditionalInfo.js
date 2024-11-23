import { axiosAuthClient } from "../axios";

export const saveAdditionalInfo = async (data) => {
  try {
    return await axiosAuthClient.post(
      `/v1/api/member/saveAdditionalInfo`,
      data
    );
  } catch (error) {
    console.error("saveAdditionalInfo 에러");
  }
};
