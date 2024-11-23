import { useState, useEffect } from "react";
import styled from "styled-components";
import themeGet from "../utils/themeGet";

import NavigationBar from "../components/NavigationBar";
import SummitItem from "../components/Summit/SummitItem";
import GotoUpload from "../components/Summit/GotoUpload";
import Modal from "../components/Modal";
import Background from "../components/Background";
import Footer from "../components/Footer";

import { ModalMessage } from "../constants/ModalMessage";
import { SummitInfoContents } from "../constants/SummitMockup";
import { SummitMapTest } from "../constants/SummitMapTest";

import { useParams } from "react-router-dom";
import { getSummit } from "../apis/Summit/getSummit";
import { getBoardsBySummit } from "../apis/Board/getBoardsBySummit";

function Summit() {
  const [isModal, setIsModal] = useState(false);
  const [gotoUpload, setGotoUpload] = useState(false);
  const [summitData, setSummitData] = useState([]);
  const { summitId } = useParams();
  // const summitData = SummitMapTest[summitId] || [];
  const currentSummitInfo =
    SummitInfoContents[summitId] || SummitInfoContents["1"];

  useEffect(() => {
    getBoardsBySummit(summitId).then((res) => {
      setSummitData(res.data);
    });
  }, []);
  const handle_button_click = () => {
    // setIsModal(true);
    setIsModal((prev) => !prev);
    console.log("handle butto click");
  };

  const handle_close_modal = () => {
    setIsModal(false);
  };

  const handle_gotoUpload_button = () => {
    setGotoUpload((prev) => !prev);
  };
  useEffect(() => {
    console.log(summitData);
  }, [summitData]);

  const info_lines = currentSummitInfo.info
    ? currentSummitInfo.info
        .split(".")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
    : [];

  return (
    <>
      <Container>
        <NavigationBar />
        <InfoContainer>
          <InfoContent>
            <p className="header">{currentSummitInfo.header}</p>
            <div>
              {info_lines.map((line, index) => {
                return <p key={index}>{line}.</p>;
              })}
            </div>
          </InfoContent>

          {/* 로그인 유무에 따라
                    로그인 O : Upload 페이지로 이동
                    로그인 X : 로그인 모달 창 띄운 후 로그인 페이지로 이동 */}
          <GotoUpload
            onClick={() => {
              setIsModal(true); // 모달을 열도록 상태 업데이트
            }}
            route={ModalMessage.login.router}
            summitId={summitId}
          />
        </InfoContainer>

        {/* 백그라운드 라운드 props 입력 후 캐러샐 컴포넌트 안에 넣어주면 됨 */}
        <Background round="left">
          <ItemGrid>
            {summitData.map((item, index) => (
              <SummitItem
                key={index}
                thumbnail={item.imgUrl}
                service_info={item.title}
                name={item.writerMemberName}
                router={"/PT/" + item.boardId}
              />
            ))}
          </ItemGrid>
        </Background>
        <Footer />

        {/* 모달창 코드 */}
        {isModal && (
          <Modal
            icon={ModalMessage.login.icon}
            message={ModalMessage.login.message}
            button={ModalMessage.login.button}
            onClose={handle_close_modal}
            router={ModalMessage.login.router}
          />
        )}
      </Container>
    </>
  );
}

export default Summit;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;

  width: 99vw;

  background: linear-gradient(
    180deg,
    ${themeGet("color.main")} 60%,
    ${themeGet("color.100")} 40%
  );
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 40px 120px 120px 120px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  flex-wrap: wrap;
  gap: 40px;

  width: 75%;

  font-weight: ${themeGet("fonts.body1.weight")};
  font-size: ${themeGet("fonts.body1.size")};
  line-height: 120%;
  color: ${themeGet("color.white")};

  .header {
    font-weight: ${themeGet("fonts.h1.weight")};
    font-size: ${themeGet("fonts.h1.size")};
    color: ${themeGet("color.white")};
  }
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;
