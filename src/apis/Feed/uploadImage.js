//TODOs

import { axiosAuthClient } from "../axios";

export const uploadImage = async (data) => {
  try {
    return await axiosAuthClient.post(`/v1/api/feed/upload`, { files: data });
  } catch (error) {
    throw new Error("uploadImage 에러");
  }
};
