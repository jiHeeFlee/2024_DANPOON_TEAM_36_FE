import React from 'react';
import styled from 'styled-components';
import themeGet from '../utils/themeGet';
import NavigationBar from "../components/NavigationBar";
import Carousel from '../components/OngoingSummit/Carousel';

import UplaodSuggestion from '../components/OngoingSummit/UploadSuggestion';
import Footer from "../components/Footer";

const OngoingSummit = () => {

  const summitData = [
    {
      id: 1,
      title: "청년 문제 해결을 위한 솔루션",
      items: [
        { presenter: '최규리', description: '청년 창업가들을 위한 PT 및 투자 연결 플랫폼, YE;Summit' },
        { presenter: '이수혁', description: '스포츠 게임 참여를 통한 건강한 도파민, Run With Mate' },
        { presenter: '김현아', description: '당뇨를 겪고 있는 청년들에게 바칩니다, 식단과 밀당하는 meal당' },
        { presenter: '정재웅', description: '이제는 진짜 졸업을 해야할 시간, 대학생들의 필수 웹 졸업할 결심' },
      ],
    },
    {
      id: 2,
      title: "소외계층의 문제 해결을 위한 솔루션",
      items: [


      ],
    },
    {
      id: 3,
      title: "지역 불균형 문제 해결을 위한 솔루션",
      items: [
        { presenter: '유지희', description: '상권, 유동인구를 분석하여 소상공인의 가게 입지 추천 서비스. 별자리' },
      ],
    },
  ];

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
        {summitData.map((summit, index) => (
          summit.items.length > 0 ? (
            <CarouselContainer key={index}>
              <Carousel title={summit.title} items={summit.items} summitId={summit.id} />
            </CarouselContainer>
          ) : null
        ))}

        {summitData.map((summit, index)=>(
          summit.items.length === 0 && (
            <UplaodSuggestion 
              key={index}
              summitId={summit.id}
              header={summit.title}
              caption='써밋 페이지에 접속해 가장 먼저 피칭 영상을 업로드해보세요.'
              />
          )
        ))}
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
        ${themeGet('color.100')} 80%,
        ${themeGet('color.main')} 20%
    );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: ${themeGet('color.main')};
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

  span{
    display: inline;

    margin-right:5px ;

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
  background-color: ${themeGet('color.white')};
`;
