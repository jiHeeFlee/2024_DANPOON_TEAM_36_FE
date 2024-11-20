import React from 'react';
import styled from 'styled-components';
import themeGet from '../utils/themeGet';
import NavigationBar from "../components/NavigationBar";
import Carousel from '../components/OngoingSummit/Carousel';
import GotoUpload from '../components/Summit/GotoUpload';
import { useNavigate } from 'react-router';
import Footer from "../components/Footer";

const OngoingSummit = () => {
  const navigate = useNavigate();

  const summitData = [
    {
      title: "디지털 헬스케어를 선도하는 AI 서비스",
      items: [
        { presenter: '최재형', description: '의사와 환자를 연결하는 원격 진료 서비스, 딥다이브' },
      ],
    },
    {
      title: "혁신적인 기술로 미래를 바꾸다",
      items: [],
    },
    {
      title: "지속 가능한 사회를 위한 기술",
      items: [
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
          <Description>YE;Summit에서는 매주 두 개의 써밋이 열립니다.</Description>
        </TitleSection>
      </Header>

      <SummitSection>
        {summitData.map((summit, index) => (
          summit.items.length > 0 ? (
            <CarouselContainer key={index}>
              <Carousel title={summit.title} items={summit.items} />
            </CarouselContainer>
          ) : null
        ))}

        {summitData.map((summit, index) => (
          summit.items.length === 0 && (
            <CTASection key={index}>
              <CTAHeader>
                '{summit.title}'를 선도하는 청년 창업가가 되고 싶으신가요?
              </CTAHeader>
              <CTADescription>
                써밋 페이지에 접속해 가장 먼저 피칭 영상을 업로드해보세요.
              </CTADescription>
              <GotoUpload />
            </CTASection>
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
        ${themeGet('color.100')} 70%,
        ${themeGet('color.main')} 30%
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
  margin: 100px 0 80px 0;
`;

const Title = styled.h1`
  font-size: ${themeGet("fonts.h1.size")};
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: ${themeGet("fonts.body1.size")};
  margin: 0;
`;

const SummitSection = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const CarouselContainer = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 530px;
  border-radius: 10px;
  border: none;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  background-color: ${themeGet('color.white')};
  margin-bottom: 40px;
`;

const CTASection = styled.section`
  background-color: ${themeGet('color.main_light')};
  border-radius: 10px;
  width: 1020px;
  height: 220px;
  padding-left: 40px;
  color: ${themeGet('color.white')};
  margin-top: 20px;
`;

const CTAHeader = styled.h2`
  font-size: ${themeGet("fonts.h2.size")};
  font-weight: bold;
  margin: 20px auto;
`;

const CTADescription = styled.p`
  font-size: ${themeGet("fonts.sub_head.size")};
  margin-bottom: 40px;
`;
