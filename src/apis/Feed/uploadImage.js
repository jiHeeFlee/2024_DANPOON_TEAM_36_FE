//TODOs

import { axiosAuthClientMulti } from "../axios";

export const uploadImage = async (data) => {
  try {
    return await axiosAuthClientMulti.post(`/v1/api/feed/upload`, {
      files: data,
    });
  } catch (error) {
    console.error("uploadImage 에러");
  }
};
