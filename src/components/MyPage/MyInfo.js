import styled from "styled-components";
import themeGet from "../../utils/themeGet";

const MyInfoComponent = ({ title, content }) => {
  return (
    <Container>
      <TitleDiv>{title}</TitleDiv>
      <ContentDiv>{content}</ContentDiv>
    </Container>
  );
};

export default MyInfoComponent;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  gap: 40px;
`;

const TitleDiv = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  color: ${themeGet("color.300")};
  font-size: ${themeGet("fonts.sub_head.size")};
  font-weight: bold;
`;

const ContentDiv = styled.div`
  display: inline-block;
  color: ${themeGet("color.400")};
  font-size: ${themeGet("fonts.sub_head.size")};
`;