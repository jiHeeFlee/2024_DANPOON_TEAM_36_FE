import { axiosAuthClient } from "../axios";

/*
    String title,
    String content,
    List<String> imageUrl,
    String serviceUrl,
    String PTUrl
*/

export const saveBoard = async (data, id, imgUrl) => {
  const userId = Number(localStorage.getItem("userId"));
  try {
    console.log(imgUrl);
    //TODO : SUMMIT ID 넣기
    return await axiosAuthClient.post(`/v1/api/board/summit/${id}`, {
      title: data.title,
      content: data.summary,
      imageUrl: imgUrl,
      serviceUrl: data.url,
      PTUrl: data.video_url,
    });
  } catch (error) {
    console.log("saveBoard 에러");
  }
};
