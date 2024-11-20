import { axiosAuthClient } from "../axios";

export const getMyInfo = async (id) => {
  try {
    return await axiosAuthClient.get(`/v1/api/member?loginUser=${id}`);
  } catch (error) {
    throw new Error("getMyInfo 에러");
  }
};
