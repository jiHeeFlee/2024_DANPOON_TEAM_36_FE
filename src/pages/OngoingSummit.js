import React from "react";
import styled from "styled-components";
import themeGet from "../utils/themeGet";
import NavigationBar from "../components/NavigationBar";
import Carousel from "../components/OngoingSummit/Carousel";

import UploadSuggestion from "../components/OngoingSummit/UploadSuggestion";

import Footer from "../components/Footer";
import { getAllSummit } from "../apis/Summit/getAllSummit";
import { useEffect, useState } from "react";

import { SummitInfoContents } from "../constants/SummitMockup";
import { SummitMapTest } from "../constants/SummitMapTest";
import { getSummit } from "../apis/Summit/getSummit";
import { getBoardsBySummit } from "../apis/Board/getBoardsBySummit";

const OngoingSummit = () => {
  const summitMockData = [
    {
      id: "1",
      title: "청년 문제 해결을 위한 솔루션",

      items: SummitMapTest["1"],
      info: SummitInfoContents["1"],
    },
    {
      id: "2",
      title: "소외계층의 문제 해결을 위한 솔루션",

      items: SummitMapTest["2"],
      info: SummitInfoContents["2"],
    },
    {
      id: "3",
      title: "지역 불균형 문제 해결을 위한 솔루션",

      items: SummitMapTest["3"],
      info: SummitInfoContents["3"],
    },
  ];

  const [summitData, setSummitData] = useState([{}]);
  const [boardData, setBoardData] = useState([{}]);
  // useEffect(() => {
  //   summitData.forEach((value) => {
  //     getBoardsBySummit(value.id).then((res) => {
  //       setBoardData(res.data);
  //     });
  //   });
  // }, [summitData]);
  // useEffect(() => {
  //   getAllSummit().then((res) => {
  //     const _summitData = res.data.data;
  //     setSummitData(_summitData);
  //   });
  // }, []);

  return (
    <MainContainer>
      <Header>
        <NavigationBar />
        <TitleSection>
          <Title>현재 진행 중인 써밋에서 다양한 피칭을 둘러보세요</Title>
          <Description>
            <span>YE;Summit</span>에서는 매주 두 개의 써밋이 열립니다.
          </Description>
        </TitleSection>
      </Header>

      <SummitSection>
        {/* {summitData.map((summit) => (
          <CarouselContainer key={summit.id}>
            <Carousel
              title={summit.title}
              items={summit.items}
              summitId={summit.id}
            />
          </CarouselContainer>
        ))}
        {summitData.map((summit, index) => (
          <UploadSuggestion
            key={index}
            summitId={summit.id}
            header={summit.title}
            caption="써밋 페이지에 접속해 가장 먼저 피칭 영상을 업로드해보세요."
          />
        ))} */}
      </SummitSection>

      <Footer />
    </MainContainer>
  );
};

export default OngoingSummit;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to top,
    ${themeGet("color.100")} 80%,
    ${themeGet("color.main")} 20%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: ${themeGet("color.main")};
  width: 100%;
  text-align: center;
  color: white;
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 20px 0;
`;

const Title = styled.h1`
  font-size: ${themeGet("fonts.h1.size")};
  margin-bottom: 20px;

  justify-content: center;

  font-family: Pretendard;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Description = styled.p`
  display: inline;
  font-size: ${themeGet("fonts.body1.size")};
  margin: 0;

  font-family: Pretendard;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  span {
    display: inline;

    margin-right: 5px;

    font-family: Pretendard;
    font-size: 40px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.015em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

const SummitSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  width: 100%;

  padding: 5px 0;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  width: 1140px;
  height: 470px;

  border-radius: 10px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  background-color: ${themeGet("color.white")};
`;
