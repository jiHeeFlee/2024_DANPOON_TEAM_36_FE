import styled from "styled-components";
import themeGet from "../utils/themeGet";
import { getLogin } from "../apis/Auth/getLogin";
import { redirect } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: fit-content;
  height: 200vh;
  .service_name {
    font-weight: 900;
  }

  overflow-y: hidden;

  .scroll-enabled {
    overflow-y: auto;
  }

  .scroll-disabled {
    overflow: hidden;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 100px;
  /* padding: 50px; */

  overflow-y: hidden;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
`;

const TextContent = styled.div`
  margin-top: 60px;
  margin-bottom: 220px;

  color: ${themeGet("color.500")};

  font-size: 48px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: -1.5%;
`;

const LoginButton = styled.img`
  width: 550px;
  height: 60px;

  cursor: pointer;
`;

const ServiceImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: flex-start;
  padding-top: 100px;

  width: 100%;
  height: 100%;

  background-color: ${themeGet("color.main")};
  box-shadow: 5px 5px 20px 2px #00000040;

  overflow: hidden;
`;

const LaptopImage = styled.img`
  max-width: 100%;
  height: auto;
`;

function Login() {
  const handle_login_button = () => {
    window.location.href = `${process.env.REACT_APP_BASEURL}/v1/api/kakao/login`;

    //TODO : 요청 받을 수 없는 상황.
    localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTczMjIxMDk4OSwibWVtYmVyX2lkIjo3fQ.GVahs3T26iLSCkPggvxXqV97QxxOSCNSeoP11lJL46tuNbh0tXkLyPbyaTPiuxVT_pfWnPOPFZt4RU14ESO4nA"
    );
    // getLogin().then((response) => {
    //   window.open(response.url);
    // });
  };
  return (
    <>
      <Container>
        <Contents>
          <Logo src={"/Logo.svg"} />
          <TextContent>
            <p>
              <span className="service_name">YE;Summit</span>에 오신 여러분,
            </p>
            <p>환영합니다.</p>
          </TextContent>
          <LoginButton
            src={"/kakaoLoginBtn.svg"}
            onClick={handle_login_button}
          />
        </Contents>
        <ServiceImage>
          <LaptopImage src={"/loginBg.svg"} />
        </ServiceImage>
      </Container>
    </>
  );
}

export default Login;
