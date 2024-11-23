import { axiosAuthClient } from "../axios";

//TODO summitID의 제작에 따른 API 변경 적용
export const getBoardLike = async (id) => {
  try {
    return await axiosAuthClient.get(
      `/v1/api/board/like/my/likes?memberId=${id}`
    );
  } catch (error) {
    console.error("getBoardLike 에러");
  }
};
