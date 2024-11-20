import { axiosAuthClient } from "../axios";

export const updateInfo = async (data) => {
  try {
    return await axiosAuthClient.put(`/v1/api/member`, data);
  } catch (error) {
    throw new Error("updateInfo 에러");
  }
};
