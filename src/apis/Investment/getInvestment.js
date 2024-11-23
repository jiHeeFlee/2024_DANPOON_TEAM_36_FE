import { axiosAuthClient } from "../axios";

export const getMyInfo = async () => {
  try {
    return await axiosAuthClient.get(`/v1/api/member`);
  } catch (error) {
    console.error(error);
  }
};
