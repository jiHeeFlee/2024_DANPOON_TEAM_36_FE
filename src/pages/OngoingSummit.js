import React from 'react';
import styled from 'styled-components';
import themeGet from '../utils/themeGet';
import NavigationBar from "../components/NavigationBar";
import Carousel from '../components/OngoingSummit/Carousel';
import { useNavigate } from 'react-router';

import UplaodSuggestion from '../components/OngoingSummit/UploadSuggestion';
import Footer from "../components/Footer";

const OngoingSummit = () => {

  const summitData = [
    {
      id: 1,
      title: "디지털 헬스케어를 선도하는 AI 서비스",
      items: [
        { presenter: '최재형', description: '의사와 환자를 연결하는 원격 진료 서비스, 딥다이브' },
      ],
    },
    {
      id: 2,
      title: "혁신적인 기술로 미래를 바꾸다",
      items: [],
    },
    {
      id: 3,
      title: "지속 가능한 사회를 위한 기술",
      items: [
        { presenter: '이윤지', description: '원격 의료 플랫폼, 닥터링크' },
        { presenter: '오지훈', description: '헬스케어 데이터 분석 및 예측 시스템, 데이터메디' },
        { presenter: '이윤지', description: '원격 의료 플랫폼, 닥터링크' },
        { presenter: '오지훈', description: '헬스케어 데이터 분석 및 예측 시스템, 데이터메디' },
        { presenter: '이윤지', description: '원격 의료 플랫폼, 닥터링크' },
        { presenter: '오지훈', description: '헬스케어 데이터 분석 및 예측 시스템, 데이터메디' },
        { presenter: '이윤지', description: '원격 의료 플랫폼, 닥터링크' },
        { presenter: '오지훈', description: '헬스케어 데이터 분석 및 예측 시스템, 데이터메디' },
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
  
  padding: 1rem 0;

`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  width: 1140px;
  height: 460px;
  
  border-radius: 10px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  background-color: ${themeGet('color.white')};
`;