import styled from "styled-components";
import themeGet from "../../utils/themeGet";
const Container = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TitleDiv = styled.div`
  color: ${themeGet("color.300")};
  font-size: ${themeGet("fonts.sub_head.size")};
  font-weight: bold;
`;

const ContentDiv = styled.div`
  color: ${themeGet("color.400")};
  font-size: ${themeGet("fonts.sub_head.size")};
`;
const MyInfoComponent = ({ title, content }) => {
  return (
    <Container>
      <TitleDiv>{title}</TitleDiv>
      <ContentDiv>{content}</ContentDiv>
    </Container>
  );
};

export default MyInfoComponent;