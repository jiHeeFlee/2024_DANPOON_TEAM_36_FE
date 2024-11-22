import React, { useState } from "react";
import styled from "styled-components";
import themeGet from "../../utils/themeGet";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SummitItem from "../Summit/SummitItem";

const Carousel = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // 한 페이지에 표시할 카드 개수

  // 이전 버튼 클릭
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(items.length / itemsPerPage) - 1
        : prevIndex - 1
    );
  };

  // 다음 버튼 클릭
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(items.length / itemsPerPage) - 1
        ? 0
        : prevIndex + 1
    );
  };

  // dot 클릭 시 해당 페이지로 이동
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const totalPages = Math.ceil(items.length / itemsPerPage); // 전체 페이지 수


  return (
    <CarouselContainer>
      <Title>{title}</Title>
      <CarouselWrapper
        style={{
          transform: `translateX(-${(currentIndex * 100) / totalPages}%)`, // 페이지에 맞게 이동
        }}
      >
        {items.map((item, index) => (
          <SummitItem
            key={index}
            thumbnail={item.thumbnail}
            service_info={item.description}
            name={item.presenter}
            router={item.router}
          />
        ))}
      </CarouselWrapper>

      {!items.length < 1 && (
        <>
          <LeftButton onClick={handlePrev} active={currentIndex > 0}>
            <BsChevronLeft size={32} />
          </LeftButton>
          <RightButton
            onClick={handleNext}
            active={currentIndex < totalPages - 1}
          >
            <BsChevronRight size={32} />
          </RightButton>
        </>
      )}

      {/* 3개 이하일 때는 1개의 dot만 보여주고 active 상태로 표시 */}
      <CarouselNav>
        {items.length <= 3 ? (
          <CarouselDot active={true} />
        ) : (
          Array.from({ length: totalPages }).map((_, index) => (
            <CarouselDot
              key={index}
              active={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))
        )}
      </CarouselNav>
    </CarouselContainer>
  );
};

export default Carousel;

// 스타일
const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1180px;
  height: 552px;

  padding-left: 80px;

  overflow: hidden;
`;

const Title = styled.div`
  position: absolute;
  left: 80px;
  top: 40px;

  color: ${themeGet('color.500')};
  font-size: ${themeGet("fonts.h3.size")};
  font-weight: bold;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  height: 560px;
  align-items: center;

  gap: 40px;
`;

const CarouselCardStyled = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 10px 1px #00000040;
  width: 314px; // 기존 Carousel 스타일에 맞춘 너비
  height: 342px; // 기존 Carousel 카드 높이에 맞춘 높이
  overflow: hidden;
  margin-right: 20px;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${themeGet("color.salmon")};
  color: ${themeGet("color.white")};
  border: none;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    pointer-events: auto;
  `}

  ${({ active }) =>
    !active &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

const LeftButton = styled(CarouselButton)`
  left: 40px; /* 원래 위치로 왼쪽 버튼 배치 */
`;

const RightButton = styled(CarouselButton)`
  right: 40px; /* 원래 위치로 오른쪽 버튼 배치 */
`;

const CarouselNav = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const CarouselDot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.active ? themeGet("color.main") : themeGet("color.300")};
  cursor: pointer;
  transition: background-color 0.3s;
`;