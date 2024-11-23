import { axiosClient } from "../axios";

export const getLogin = async (id) => {
  try {
    return await axiosClient.get(`/v1/api/kakao/token?userId=${id}`);
  } catch (error) {
    throw new Error("getLogin 에러");
  }
};
