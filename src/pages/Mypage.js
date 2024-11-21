// import { useState } from "react";
// import styled from "styled-components";
// import themeGet from "../utils/themeGet";

// import NavigationBar from "../components/NavigationBar";
// import Footer from "../components/Footer";
// import Info from "../components/MyPage/Info";
// import VideoWrapper from "../components/MyPage/VideoWrapper";
// import PTList from "../components/MyPage/PTList";
// import { useSearchParams } from "react-router-dom";

// function Mypage() {

//   const[participant_type, setParticipant_type] = useState('YOUTH');

//   return (
//     <Container>
//       <NavigationBar />
//       <Title>마이 페이지</Title>
//       <Header>
//         <span>최규리</span>님 안녕하세요
//       </Header>
//       <Wrapper>
//         <Info
//           participant_type="YOUTH"
//           styled={{ margin: "40px auto 25px auto" }}
//         />
//         <VideoWrapper />
//         <PTList type="like" />
//       </Wrapper>
//       <Wrapper>
//         <Info
//           participant_type="YOUTH"
//           styled={{ margin: "40px auto 25px auto" }}
//         />
//         <VideoWrapper />
//         <PTList type="like" />
//       </Wrapper>
//       <Footer />
//     </Container>
//   );
// }

// export default Mypage;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   /* justify-content: center; */
//   /* align-items: center; */

//   width: 100vw;
//   height: 250vh;

//   /* gap: 35px; */

//   background: linear-gradient(
//     to top,
//     ${themeGet("color.100")} 90%,
//     ${themeGet("color.main")} 10%
//   );
// `;

// const Title = styled.p`
//   margin: 40px auto auto 120px;

//   color: ${themeGet("color.white")};

//   font-family: Pretendard;
//   font-size: 36px;
//   font-weight: 700;
//   line-height: 42px;
//   letter-spacing: -0.015em;
//   text-align: left;
//   text-underline-position: from-font;
//   text-decoration-skip-ink: none;
// `;
// const Header = styled.p`
//   display: flex;
//   justify-content: center;
//   align-items: baseline;

//   margin: 80px auto 0 auto;

//   color: ${themeGet("color.500")};

//   font-family: Pretendard;
//   font-size: 30px;
//   font-weight: 400;
//   line-height: 38px;
//   letter-spacing: -0.015em;

//   text-align: center;
//   text-underline-position: from-font;
//   text-decoration-skip-ink: none;

//   span {
//     font-family: Pretendard;
//     font-size: 36px;
//     font-weight: 700;
//     line-height: 42px;
//     letter-spacing: -0.015em;
//     text-align: left;
//     text-underline-position: from-font;
//     text-decoration-skip-ink: none;
//   }
// `;
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;

//   min-width: 1116px;
//   min-height: 1379px;
//   border-radius: 20px;

//   margin: 40px 162px;
//   padding: 80px 120px;

//   gap: 30px;

//   background-color: ${themeGet("color.white")};
//   box-shadow: 5px 5px 20px 2px #00000040;
// `;


import { useState } from "react";
import styled from "styled-components";
import themeGet from "../utils/themeGet";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Info from "../components/MyPage/Info";
import VideoWrapper from "../components/MyPage/VideoWrapper";
import PTList from "../components/MyPage/PTList";
import { useSearchParams } from "react-router-dom";

function Mypage() {
  const [participant_type, setParticipant_type] = useState("INVESTOR");

  return (
    <Container>
      <NavigationBar />
      <Title>마이 페이지</Title>
      <Header>
        <span>최규리</span>님 안녕하세요
      </Header>

      {participant_type === "YOUTH" ? (
        <Wrapper>
          <Info
            participant_type="YOUTH"
            styled={{ margin: "40px auto 25px auto" }}
          />
          <VideoWrapper />
          <PTList type="like" />
        </Wrapper>
      ) : (
        <Wrapper>
          <Info
            participant_type="INVESTOR"
            styled={{ margin: "40px auto 25px auto" }}
          />
          <PTList type="propose" />
          <PTList type="like" />
        </Wrapper>
      ) 
    }
      <Footer />
    </Container>
  );
}

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 250vh;
  background: linear-gradient(
    to top,
    ${themeGet("color.100")} 90%,
    ${themeGet("color.main")} 10%
  );
`;

const Title = styled.p`
  margin: 40px auto auto 120px;
  color: ${themeGet("color.white")};
  font-family: Pretendard;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.015em;
  text-align: left;
`;

const Header = styled.p`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 80px auto 0 auto;
  color: ${themeGet("color.500")};
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -0.015em;
  text-align: center;
  span {
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0.015em;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 1116px;
  min-height: 1379px;
  border-radius: 20px;
  margin: 40px 162px;
  padding: 80px 120px;
  gap: 30px;
  background-color: ${themeGet("color.white")};
  box-shadow: 5px 5px 20px 2px #00000040;
`;

