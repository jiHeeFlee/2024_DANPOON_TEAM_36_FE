import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import MyInfoComponent from "./MyInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${themeGet("color.500")};

  width: 100%;
`;
const Header = styled.p`
  margin: auto auto 10px 0;

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
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* gap:20px; */
  padding: 40px 88px;

  width: 100%;
  height: 100%;

  background-color: ${themeGet("color.100")};
  border: 3px solid ${themeGet("color.200")};

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: flex-start; */
    /* align-items: first baseline; */
    gap: 20px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: end;

  gap: 9.5px;

  margin: 10px 0px auto auto;
`;
const Button = styled.button`
  padding: 8px 20px;

  color: ${themeGet("color.white")};
  background-color: ${themeGet("color.main")};
  border-radius: 10px;

  //styleName: Body1;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &:hover {
    color: white;
    background-color: ${themeGet("color.salmon")};
    transition: all 0.3s;
  }

  &:active {
    color: white;
    background-color: #c43c19;
    transition: all 0.3s;
  }
`;

function Info({ participant_type }) {
  return (
    <>
      {participant_type === "YOUTH" && (
        <Container>
          <Header>내 정보</Header>
          <Wrapper>
            <div>
              <MyInfoComponent title="구분" content="예비 창업자" />
              <MyInfoComponent title="연락처" content="01012345678" />
              <MyInfoComponent title="이메일" content="goorm@gmail.com" />
              <MyInfoComponent title="알림톡" content="수신" />
            </div>
            <div>
              <MyInfoComponent
                title="소속 회사 및 직책"
                content="구름 / 인턴"
              />
              <MyInfoComponent title="사업자 등록 번호" content="n12345" />
              <MyInfoComponent title="사업 아이디어 및 분야" content="IT" />
            </div>
          </Wrapper>
          <ButtonWrapper>
            <Button>회원 정보 수정하기</Button>
            <Button>회원 탈퇴 하기</Button>
          </ButtonWrapper>
        </Container>
      )}
    </>
  );
}

export default Info;
