import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import SummitItem from "../Summit/SummitItem";

import { SummitMapTest } from "../../constants/SummitMapTest";
// import TestImg01 from "../../assets/img/test_img6.jpg";

function LikePTVideo({ type, data }) {
  console.log("@@@@", SummitMapTest);
  const headerText =
    type === "like"
      ? "좋아요 누른 PT 영상 둘러 보기"
      : "투자 제안 보낸 PT 영상";
  const emptyText =
    type === "like"
      ? "아직 좋아요 버튼을 누른 영상이 없습니다!"
      : "아직 투자 제안을 보낸 PT 영상이 없습니다!";

  return (
    <Container>
      <Header>{headerText}</Header>
      <SummitItemContainer>
        {SummitMapTest[1].length > 0 ? (
          <ItemGrid>
            <SummitItemWrapper>
              <SummitItem
                thumbnail={SummitMapTest[1][0].thumbnail}
                service_info={SummitMapTest[1][0].service_info}
                name={SummitMapTest[1][0].name}
                router={SummitMapTest[1][0].url}
              />
            </SummitItemWrapper>
          </ItemGrid>
        ) : (
          <div>{emptyText}</div>
        )}
      </SummitItemContainer>
    </Container>
  );
}

export default LikePTVideo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  gap: 17px;
  width: 100%;
  height: 350px;
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
`;

const SummitItemWrapper = styled.div`
  flex: 0 0 calc(20% - 1px); /* 한 아이템이 20%의 너비를 차지 */
  box-sizing: border-box; /* 패딩 포함한 크기 계산 */
`;

const ItemGrid = styled.div`
  display: flex;
  gap: 20px;

  overflow-x: auto;
  padding-bottom: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
