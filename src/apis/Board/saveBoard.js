import { axiosAuthClient, axiosAuthClientMulti } from "../axios";

/*
    String title,
    String content,
    List<String> imageUrl,
    String serviceUrl,
    String PTUrl
*/

export const saveBoard = async (data) => {
  try {
    return await axiosAuthClientMulti.post(`/v1/api/board/summit/13`, data);
  } catch (error) {
    console.log("saveBoard 에러");
  }
};
