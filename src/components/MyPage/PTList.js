import React, { useState } from "react";
import styled from 'styled-components';
import Carousel from "../OngoingSummit/Carousel";
import themeGet from '../../utils/themeGet';

import SummitItem from '../Summit/SummitItem';
import { SummitMapTest } from '../../constants/SummitMapTest';

import CircleArrow from '../CircleArrow';


function PTList({ type, data }) {


  const headerText =
    type === 'like' ? '좋아요 누른 PT 영상 둘러 보기' : '투자 제안 보낸 PT 영상';
  const emptyText =
    type === 'like'
      ? '아직 좋아요 버튼을 누른 영상이 없습니다!'
      : '아직 투자 제안을 보낸 PT 영상이 없습니다!';


      const [currentIndex, setCurrentIndex] = useState(0); // currentIndex 상태 추가
      const itemsPerPage = 4; 

  // 이전 버튼 클릭
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(SummitMapTest.length / itemsPerPage) - 1
        : prevIndex - 1
    );
  };

  // 다음 버튼 클릭
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(SummitMapTest.length / itemsPerPage) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const totalPages = Math.ceil(SummitMapTest.length / itemsPerPage); // 전체 페이지 수

  const shouldHideNavigation = SummitMapTest.length <= itemsPerPage;

  return (
    <Container>
      <Header>{headerText}</Header>

      <SummitItemContainer>
        {SummitMapTest.length > 0 ? (
          <ItemGrid>
            {SummitMapTest.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((item, index) => (
              <SummitItemWrapper key={index}>
                <SummitItem
                  thumbnail={item.thumbnail}
                  service_info={item.service_info}
                  name={item.name}
                  router={item.url}
                />
              </SummitItemWrapper>
            ))}
          </ItemGrid>
        ) : (
          <div>{emptyText}</div>
        )}


        {!shouldHideNavigation && (
          <>
          <LeftButton onClick={handlePrev} active={currentIndex > 0}>
            <CircleArrow direction="left" />
          </LeftButton>
          <RightButton
            onClick={handleNext}
            active={currentIndex < totalPages - 1}
          >
            <CircleArrow direction="right" />
          </RightButton>
        </>
        )
        }
      </SummitItemContainer>
    </Container>

  )
}

export default PTList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap:17px;
    width: 100%;
`;
const Header = styled.p`
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.015em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;
const SummitItemContainer = styled.div`
    width: 100%;
    position: relative; 
`;

const SummitItemWrapper = styled.div`
    flex: 0 0 calc(20% - 1px); /* 한 아이템이 20%의 너비를 차지 */
    box-sizing: border-box; /* 패딩 포함한 크기 계산 */
    background-color: white;
    padding: 15px 0px 15px 13px;
`

const ItemGrid = styled.div`
  display: flex;
  gap: 20px;

  overflow-x: auto;
  padding-bottom: 15px;

  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftButton = styled.div`
  position: absolute;
  top: 40%;
  left: -10px;
  transform: translateY(-50%);
  z-index: 2;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

const RightButton = styled.div`
  position: absolute;
  top: 40%;
  right: 2vw;
  transform: translateY(-50%);
  z-index: 2;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
