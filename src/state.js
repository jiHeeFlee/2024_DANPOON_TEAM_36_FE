import { atom } from "recoil";

export const mypageInfoState = atom({
  key: "mypageInfoState",
  default: {
    name: "",
    phoneNumber: "",
    company: "",
    position: "",
    userType: "",
    businessRegistrationNumber: "",
    businessIdeaField: "",
    consentSummitAlerts: true,
    consentPrivacyPolicy: true,
  },
});

export const likePTVideosState = atom({
  key: "likePTVideosState",
  default: [
    {
      myMemberId: 0,
      writerMemberId: 0,
      boardId: 0,
      title: "string",
      content: "string",
      imageUrl: ["string"],
    },
  ],
});

export const myVideoState = atom({
  key: "myVideoState",
  default: {
    myMemberId: 0,
    writerMemberId: 0,
    boardId: 0,
    title: "string",
    content: "string",
    imageUrl: ["string"],
    likeCount: 0,
    isLike: true,
    InvestmentCount: 0,
    invest: true,
    commentCount: 0,
    date: "string",
    comments: [
      {
        writerMemberId: 0,
        commentId: 0,
        comment: "string",
      },
    ],
  },
});

export const userIdState = atom({
  key: "userId",
  default: 0,
});
