import { axiosAuthClient } from "../axios";

export const withdrawMember = async (data) => {
  try {
    return await axiosAuthClient.delete(`/v1/api/member`, data);
  } catch (error) {
    console.error("withdrawMember 에러");
  }
};
