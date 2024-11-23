import { axiosAuthClient } from "../axios";

/*
    String title,
    String content,
    List<String> imageUrl,
    String serviceUrl,
    String PTUrl
*/

export const saveBoard = async (data) => {
  try {
    return await axiosAuthClient.post(`/v1/api/board`, data);
  } catch (error) {
    console.log("saveBoard 에러");
  }
};
