// import styled from 'styled-components';
// import themeGet from '../../utils/themeGet';

// import CircleArrow from '../CircleArrow';
// import Carousel from '../OngoingSummit/Carousel';

// import {AiOutlineMail} from 'react-icons/ai';
// import {IoIosCall} from 'react-icons/io';

// function ProposeCard(){

//     return(
//         <Container>
//             <Title>내가 받은 투자 제안</Title>
//             <Wrapper>
//                 <Card_Arrow_Area>
//                     <CircleArrow direction='left'/>
//                     <Card>
//                         <Line />
//                         <div>
//                             <Card_Header>최우혁<span>대표</span></Card_Header>
//                             <Card_Contact_Email>
//                                 <IoIosCall style={{margin:'0px'}}/>
//                                 010-6247-1409
//                             </Card_Contact_Email>
//                             <Card_Contact_Email>
//                                 <AiOutlineMail style={{margin:'0px'}}/>
//                                 WHInv@gmail.com
//                             </Card_Contact_Email>
//                         </div>
//                     </Card>
//                     <CircleArrow direction='right'/>                    
//                 </Card_Arrow_Area>
//                 {/* <Carousel /> */}
//             </Wrapper>
//         </Container>
//     )
// }

// export default ProposeCard;

// const Container=styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
// `
// const Title=styled.p`
//     //styleName: H3_Bold;
//     font-family: Pretendard;
//     font-size: 24px;
//     font-weight: 700;
//     line-height: 34px;
//     letter-spacing: -0.015em;
//     text-align: left;
//     text-underline-position: from-font;
//     text-decoration-skip-ink: none;

// `;
// const Wrapper=styled.div`
//     display: flex;
//     flex-direction: column;

//     min-width: 516px;
//     min-height: 378px;
  
//     gap: 20px;

//     background-color: ${themeGet('color.100')};
//     border-radius: 10px;

//     padding-top: 80px;
//     padding-left: 20px;
//     padding-right: 20px;
// `;
// const Card_Arrow_Area=styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     gap: 20px;
    
// `;
// const Card=styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: left;
//     align-items: end;
//     padding: 20px;
//     gap: 20px;

//     min-width: 356px;
//     min-height: 218px;

//     border-radius: 10px;

//     background-color: ${themeGet('color.main')};

//     div{
//         display: flex;
//         flex-direction: column;
//     }
// `;

// const Line=styled.div`
//     width: 2px;
//     height: 100px;
//     background-color: ${themeGet('color.salmon')};
// `;
// const Card_Header=styled.p`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 10px;
//     margin-bottom: 12px;

//     color: ${themeGet('color.white')};
    
//     font-family: Pretendard;
//     font-size: 24px;
//     font-weight: 700;
//     line-height: 34px;
//     letter-spacing: -0.015em;
//     text-align: left;
//     text-underline-position: from-font;
//     text-decoration-skip-ink: none;

//     span{
//         font-family: Pretendard;
//         font-size: 18px;
//         font-weight: 400;
//         line-height: 28px;
//         letter-spacing: -0.015em;
//         text-align: left;
//         text-underline-position: from-font;
//         text-decoration-skip-ink: none;
//     }

// `;
// const Card_Contact_Email=styled.p`
//     display: flex;
//     flex-direction: row;
//     justify-content: start;
//     align-items: center;
//     gap: 10px;

//     color: ${themeGet('color.white')};

//     font-family: Pretendard;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 24px;
//     letter-spacing: -0.015em;

//     text-align: left;
//     text-underline-position: from-font;
//     text-decoration-skip-ink: none;
// `;


import React, { useState } from "react";
import styled from "styled-components";
import themeGet from "../../utils/themeGet";
import CircleArrow from "../CircleArrow";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

import ProposeCardMockup from "../../constants/ProposeCardMockup";

function ProposeCard({ summitData }) {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스를 관리

  const itemsPerPage = 1; // 한 페이지에 표시할 카드 개수
  const totalPages = Math.ceil(summitData.length / itemsPerPage); // 전체 페이지 수

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <Title>내가 받은 투자 제안</Title>
      <Wrapper>
        <Card_Arrow_Area>
          <CircleArrow direction="left" onClick={handlePrev} />
          <CardWrapper
            style={{
              transform: `translateX(-${(currentIndex * 100) / totalPages}%)`,
            }}
          >
            {summitData.map((item, index) => (
              <Card key={index}>
                <Line />
                <div>
                  <Card_Header>
                    {item.name}
                    <span>{item.title}</span>
                  </Card_Header>
                  <Card_Contact_Email>
                    <IoIosCall style={{ margin: "0px" }} />
                    {item.phone}
                  </Card_Contact_Email>
                  <Card_Contact_Email>
                    <AiOutlineMail style={{ margin: "0px" }} />
                    {item.email}
                  </Card_Contact_Email>
                </div>
              </Card>
            ))}
          </CardWrapper>
          <CircleArrow direction="right" onClick={handleNext} />
        </Card_Arrow_Area>

        {/* Dot 네비게이션 */}
        <CarouselNav>
          {Array.from({ length: totalPages }).map((_, index) => (
            <CarouselDot
              key={index}
              active={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </CarouselNav>
      </Wrapper>
    </Container>
  );
}

export default ProposeCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.015em;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 516px;
  min-height: 378px;
  gap: 20px;
  background-color: ${themeGet("color.100")};
  border-radius: 10px;
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Card_Arrow_Area = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-end;
  padding: 20px;
  gap: 20px;
  min-width: 356px;
  min-height: 218px;
  border-radius: 10px;
  background-color: ${themeGet("color.main")};
`;

const Line = styled.div`
  width: 2px;
  height: 100px;
  background-color: ${themeGet("color.salmon")};
`;

const Card_Header = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: ${themeGet("color.white")};
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
`;

const Card_Contact_Email = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  color: ${themeGet("color.white")};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
`;

const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 20px;
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
