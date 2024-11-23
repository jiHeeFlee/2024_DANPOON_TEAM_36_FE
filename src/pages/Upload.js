import { useState, useEffect } from "react";
import styled from "styled-components";
import themeGet from "../utils/themeGet";

import NavigationBar from "../components/NavigationBar";
import Inputs from "../components/InputUpload";
import InputMessage from "../constants/InputMessage";
import FileUpload from "../components/Upload/FileUpload";
import UploadButton from "../components/Upload/UploadButton";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

import { ModalMessage } from "../constants/ModalMessage";

import { myVideoState } from "../state";

import { useRecoilState } from "recoil";
// api - POST
import { saveBoard } from "../apis/Board/saveBoard";
//api - GET
import { getMyBoard } from "../apis/Board/getMyBoard";
// api - POST
import { updateBoard } from "../apis/Board/updateBoard";
import MyPTVideo from "../components/MyPage/MyPTVideo";
import { useParams } from "react-router-dom";
import { uploadImage } from "../apis/Feed/uploadImage";
function Upload({ summit }) {
  const { summitId } = useParams();
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); // 모달 내용을 동적으로 관리
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    url: "",
    video_url: "",
    thumbnail: null,
  });

  // myVideoState - recoil
  const [ismyVideoState, setIsMyVideoState] = useRecoilState(myVideoState);

  // 필수 데이터가 비어 있는지 확인
  const isRequiredFormDataInvalid = () => {
    return (
      formData.title === "" ||
      formData.summary === "" ||
      formData.video_url === ""
    );
  };

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setModalContent(null);
  };

  // 업로드 버튼 클릭 시 처리
  const handleUploadButton = (event) => {
    event.preventDefault();

    if (isRequiredFormDataInvalid()) {
      // 필수 값이 비어있으면 모달을 표시
      handleOpenModal({
        icon: ModalMessage.requiredData.icon,
        message: ModalMessage.requiredData.message,
        button: ModalMessage.requiredData.button,
        onClose: handleCloseModal,
        router: null, // 필수 값 누락 시 페이지 이동 없음
      });
    } else {
      // 정상 처리 로직
      if (formData.thumbnail !== null && formData.thumbnail !== undefined) {
        uploadImage(formData.thumbnail).then((res) => {
          saveBoard(formData, summitId, res.data.data.imageUrls);
        });
      }

      handleOpenModal({
        icon: ModalMessage.pt.icon,
        message: ModalMessage.pt.message,
        button: ModalMessage.pt.button,
        onClose: handleCloseModal,
        router: "/pt", // 정상 입력 시 페이지 이동
      });
    }
    console.log("Uploaded form data:", { ...formData });
  };

  // FileUpload에서 파일 정보 업데이트
  const handleFileChange = (file) => {
    console.log("Received file:", file);
    setFormData((prevData) => ({
      ...prevData,
      thumbnail: file,
    }));
  };

  // Input 값 변경 시 formData 업데이트
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // useEffect(()=>{
  //     saveBoard(ismyVideoState).then((response)=>{
  //         if (response){
  //             setIsMyVideoState(response);
  //         }else{
  //             setIsMyVideoState(myVideoState);
  //         }
  //     });
  //     getMyBoard(ismyVideoState).then((response)=>{
  //         if(response){
  //             setIsMyVideoState(response);
  //         }else{
  //             setIsMyVideoState(myVideoState);
  //         }
  //     });
  //     updateBoard(ismyVideoState).then((response)=>{
  //         if(response){
  //             setIsMyVideoState(response);
  //         }else{
  //             setIsMyVideoState(myVideoState);
  //         }
  //     });
  // })

  return (
    <>
      <Container>
        <NavigationBar />
        <Items>
          <Header>PT 영상 및 정보를 작성해주세요</Header>
          <UploadContainer>
            <Inputs
              header={InputMessage.title.header}
              placeholder={InputMessage.title.placeholder}
              star={InputMessage.title.star}
              caption={InputMessage.title.caption}
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
            <Inputs
              header={InputMessage.summary.header}
              placeholder={InputMessage.summary.placeholder}
              star={InputMessage.summary.star}
              type="textarea"
              caption={InputMessage.title.caption}
              value={formData.summary}
              onChange={(e) => handleInputChange("summary", e.target.value)}
            />
            <Inputs
              header={InputMessage.server_url.header}
              placeholder={InputMessage.server_url.placeholder}
              info={InputMessage.server_url.info}
              value={formData.url}
              onChange={(e) => handleInputChange("url", e.target.value)}
            />
            <Inputs
              header={InputMessage.pt_url.header}
              placeholder={InputMessage.pt_url.placeholder}
              info={InputMessage.pt_url.info}
              star={InputMessage.pt_url.star}
              caption={InputMessage.pt_url.caption}
              value={formData.video_url}
              onChange={(e) => handleInputChange("video_url", e.target.value)}
            />
            <FileUpload onChange={handleFileChange} />
          </UploadContainer>
          <UploadButton
            onClick={handleUploadButton}
            text="PT 영상 업로드 하러 가기"
          />
        </Items>
        <Footer />

        {isModal && modalContent && (
          <Modal
            icon={modalContent.icon}
            message={modalContent.message}
            button={modalContent.button}
            onClose={handleCloseModal}
            router={modalContent.router}
          />
        )}
      </Container>
    </>
  );
}

export default Upload;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 200vh;

  background: linear-gradient(
    to top,
    ${themeGet("color.100")} 70%,
    ${themeGet("color.main")} 30%
  );
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.p`
  text-align: center;

  margin: 80px 0px;

  color: ${themeGet("color.white")};
  font-size: ${themeGet("fonts.h1.size")};
  font-weight: ${themeGet("fonts.h1.weight")};
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;

  width: 640px;
  height: auto;

  margin-bottom: 30px;
  padding: 80px;

  background-color: ${themeGet("color.white")};
  border-radius: 10px;
  box-shadow: 5px 5px 20px 2px #00000040;
`;
