import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import SummitItem from "../Summit/SummitItem";

import { SummitMapTest } from "../../constants/SummitMapTest";
import TestImg01 from "../../assets/img/test_img6.jpg";

function LikePTVideo() {
  return (
    <Container>
      <Header>좋아요 누른 PT 영상 둘러 보기</Header>
      <SummitItemContainer>
        {/* <SummitItem 
                    thumbnail={TestImg01}
                    service_info='의사와 환자를 연결하는 
원격 진료 서비스, 닥터나우'
                    // router main으로 임시 설정
                    router={'/'}
                    name='최재형'
                /> */}
        {/* <ItemGrid>
                    {SummitMapTest.slice(0,5).map((item, index) => (
                        <SummitItem
                            key={index}
                            thumbnail={item.thumbnail}
                            service_info={item.service_info}
                            name={item.name}
                            router={item.url}
                        />
                    ))}
                    {SummitMapTest.length > 0 ? (
                        SummitMapTest.slice(0, 5).map((item, index) => (
                            <SummitItemWrapper key={index}> 
                                <SummitItem
                                    thumbnail={item.thumbnail}
                                    service_info={item.service_info}
                                    name={item.name}
                                    router={item.url}
                                />
                            </SummitItemWrapper>
                        ))
                    ) : (
                        <div>아직 좋아요 버튼을 누른 영상이 없습니다!</div>
                    )}
                </ItemGrid> */}
        {SummitMapTest.length > 0 ? (
          <ItemGrid>
            {SummitMapTest.map((item, index) => (
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
          <div>아직 좋아요 버튼을 누른 영상이 없습니다!</div>
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
    height: 8px; /* 스크롤바 높이 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${themeGet("color.300")}; /* 스크롤바 색상 */
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${themeGet("color.100")}; /* 스크롤바 트랙 색상 */
  }
`;
