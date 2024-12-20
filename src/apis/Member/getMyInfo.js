import { axiosAuthClient } from "../axios";

export const getMyInfo = async (id) => {
  try {
    return await axiosAuthClient.get(`/v1/api/member?memberId=${id}`);
  } catch (error) {
    console.error(error);
  }
};
