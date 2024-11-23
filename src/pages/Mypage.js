import { useState, useEffect } from "react";
import styled from "styled-components";
import themeGet from "../utils/themeGet";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Info from "../components/MyPage/Info";
import VideoWrapper from "../components/MyPage/VideoWrapper";
import LikePTVideo from "../components/MyPage/LikePTVideo";
import PTList from "../components/MyPage/PTList";
import {
  likePTVideosState,
  myVideoState,
  mypageInfoState,
  myInvestState,
} from "../state";
import { useRecoilState, useRecoilValue } from "recoil";
import { getMyInfo } from "../apis/Member/getMyInfo";
import { MypageMockup } from "../constants/MypageMockup";
import { getBoardLike } from "../apis/Board/getBoardLike";
import { LikePTVideoMockup } from "../constants/LikePTVideoMockup";
import { getMyBoard } from "../apis/Board/getMyBoard";
import { getMyInvest } from "../apis/Investment/getMyInvest";
function Mypage() {
  const [userInfo, setUserInfo] = useRecoilState(mypageInfoState);
  const [likePTVideos, setLikePTVideos] = useRecoilState(likePTVideosState);
  const [myVideo, setMyVideo] = useRecoilState(myVideoState);
  const [myInvest, setMyInvest] = useRecoilState(myInvestState);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    getMyInfo(userId).then((response) => {
      if (response) {
        console.log(response);
        setUserInfo(response.data);
      } else {
        setUserInfo(MypageMockup);
      }
    });
    getBoardLike(userId).then((response) => {
      if (response) {
        setLikePTVideos(response.data);
      } else {
        setLikePTVideos(LikePTVideoMockup);
      }
    });
    getMyBoard(userId).then((response) => {
      if (response) {
        setMyVideo(response.data.data);
      } else {
        setMyVideo();
      }
    });
    getMyInvest(userId, 0).then((response) => {
      if (response) {
        setMyInvest(response.data.data);
      } else {
        setMyInvest();
      }
    });
  }, []);

  return (
    <Container>
      <NavigationBar active="mypage" />
      <Title>마이 페이지</Title>
      <Header>
        <span>{userInfo.name}</span>님 안녕하세요
      </Header>
      <Wrapper>
        <Info
          participant_type={userInfo.userType}
          styled={{ margin: "40px auto 25px auto" }}
        />
        {/* TODO : 제안 PTList 에 대한 API 없기 때문에 아직 붙이지 않음*/}
        {userInfo.userType === "ENTREPRENEUR" && <VideoWrapper />}
        {userInfo.userType === "INVESTOR" && <PTList />}

        <LikePTVideo />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: center; */
  /* align-items: center; */

  width: 100vw;
  height: 250vh;

  /* gap: 35px; */

  background: linear-gradient(
    to top,
    ${themeGet("color.100")} 90%,
    ${themeGet("color.main")} 10%
  );
`;

const Title = styled.p`
  margin: 40px auto auto 120px;

  color: ${themeGet("color.white")};

  font-family: Pretendard;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
const Header = styled.p`
  display: flex;
  justify-content: center;
  align-items: baseline;

  margin: 0 auto;

  color: ${themeGet("color.500")};

  font-family: Pretendard;
  font-size: 30px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -0.015em;

  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  span {
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0.015em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-width: 1116px;
  min-height: 1379px;
  border-radius: 20px;

  margin: 40px 162px;
  padding: 80px 120px;

  gap: 30px;

  background-color: ${themeGet("color.white")};
  box-shadow: 5px 5px 20px 2px #00000040;
`;
