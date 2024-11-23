import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import MyPTVideo from "./MyPTVideo";
import ProposeCard from "./ProposeCard";

function VideoWrapper() {
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
