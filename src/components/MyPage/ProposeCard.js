import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import CircleArrow from "../CircleArrow";
import Carousel from "../OngoingSummit/Carousel";

import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { useRecoilState } from "recoil";
import { myInvestState } from "../../state";

function ProposeCard(data) {
  return (
    <Container>
      <Title>내가 받은 투자 제안</Title>
      <Wrapper>
        <Card_Arrow_Area>
          <CircleArrow direction="left" />
          <Card>
            <Line />
            <div>
              <Card_Header>
                {}
                <span>MD</span>
              </Card_Header>
              <Card_Contact_Email>
                <IoIosCall style={{ margin: "0px" }} />
                010-1234-5678
              </Card_Contact_Email>
              <Card_Contact_Email>
                <AiOutlineMail style={{ margin: "0px" }} />
                goorm@gmail.com
              </Card_Contact_Email>
            </div>
          </Card>
          <CircleArrow direction="right" />
        </Card_Arrow_Area>
        {/* <Carousel /> */}
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
  //styleName: H3_Bold;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: end;
  padding: 20px;
  gap: 20px;

  min-width: 356px;
  min-height: 218px;

  border-radius: 10px;

  background-color: ${themeGet("color.main")};

  div {
    display: flex;
    flex-direction: column;
  }
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
  line-height: 34px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  span {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.015em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
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

  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
