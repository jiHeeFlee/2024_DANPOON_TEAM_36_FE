import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import MyPTVideo from "./MyPTVideo";
import ProposeCard from "./ProposeCard";
import { useRecoilValue } from "recoil";
import { myInvestState } from "../../state";

function VideoWrapper() {
  const myInvest = useRecoilValue(myInvestState);
  return (
    <Container>
      <MyPTVideo />
      <ProposeCard />
    </Container>
  );
}

export default VideoWrapper;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  width: 100%;
`;
