import { axiosClient } from "../axios";

export const getLogin = async () => {
  try {
    return await axiosClient.get(`/v1/api/kakao/login`);
  } catch (error) {
    throw new Error("getLogin 에러");
  }
};
