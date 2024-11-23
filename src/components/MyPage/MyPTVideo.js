import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import SummitItem from "../Summit/SummitItem";
import TestImg01 from "../../assets/img/test_img5.jpg";
import { useRecoilValue } from "recoil";
import { myVideoState } from "../../state";
import { SummitMapTest } from "../../constants/SummitMapTest";
import noneThumbnail from "../../assets/img/noneThumbnail.svg";

function MyPTVideo() {
  const myVideo = useRecoilValue(myVideoState);
  return (
    <Container>
      <TitleWrapper>
        <Title>나의 PT 영상</Title>
        <Button>바로가기</Button>
      </TitleWrapper>
      <Wrapper>
        <Caption>{SummitMapTest[1][0].header}</Caption>
        {myVideo ? (
          <SummitItem
            thumbnail={noneThumbnail}
            service_info={myVideo.title}
            // router main으로 임시 설정
            router={"/"}
          />
        ) : (
          <SummitItem
            thumbnail={noneThumbnail}
            service_info={SummitMapTest[1][0].service_info}
            // router main으로 임시 설정
            router={"/"}
          />
        )}
      </Wrapper>
    </Container>
  );
}

export default MyPTVideo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: auto auto 10px 0;

  gap: 10px;
`;

const Title = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Button = styled.button`
  align-items: center;
  text-align: center;

  padding: 2px 10px;

  color: ${themeGet("color.white")};
  background-color: ${themeGet("color.main")};

  border-radius: 10px;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &:hover {
    color: ${themeGet("color.white")};
    background-color: ${themeGet("color.salmon")};
    transition: all 0.3s;
  }

  &:active {
    color: ${themeGet("color.white")};
    background-color: ${themeGet("color.main")};
    transition: all 0.3s;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 340px;
  min-height: 388px;
  padding: 20px 38px 28px 39px;
  gap: 20px;
  border-radius: 10px;

  background-color: ${themeGet("color.100")};
  border-radius: 10px;
`;

const Caption = styled.p`
  //styleName: Body1;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.015em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: ${themeGet("color.500")};
`;
