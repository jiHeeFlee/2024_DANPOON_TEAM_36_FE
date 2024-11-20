import { useState } from "react";
import styled from "styled-components";
import themeGet from "../utils/themeGet";

import NavigationBar from "../components/NavigationBar";
import Inputs from "../components/InputUpload";
import InputUpload from "../components/InputUpload";
import InputMessage from "../constants/InputMessage";
import FileUpload from "../components/Upload/FileUpload";
import UploadButton from "../components/Upload/UploadButton";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

import { ModalMessage } from "../constants/ModalMessage";

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

function Upload() {
    const [isModal,setIsModal]=useState(false);
    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        url: "",
        video_url: "",
        thumbnail: null,
    });

    // const handle_button_click=()=>{
    //     setIsModal(true);
    // }
    const handle_close_modal=()=>{
        setIsModal(false);
    }

    // FileUpload에서 파일 정보 업데이트
    const handle_file_change = (file) => {
        console.log("Received file:", file);
        setFormData((prevData) => ({
            ...prevData,
            thumbnail: file, // 파일 객체 저장
        }));
    };

    // Input 값 변경 시 formData 업데이트
    const handle_input_change = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value, // 동적으로 field 업데이트
        }));
    };

     // Upload 버튼 클릭 시 formData 출력
    const handle_upload_button = () => {
        // 비동기 업데이트 문제를 방지하고 최신 상태 출력
        console.log("Uploaded form data:", { ...formData });
        setIsModal(true);
    };

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
                            onChange={(e) => handle_input_change("title", e.target.value)}
                        />
                        <Inputs
                            header={InputMessage.summary.header}
                            placeholder={InputMessage.summary.placeholder}
                            star={InputMessage.summary.star}
                            type="textarea"
                            caption={InputMessage.title.caption}

                            value={formData.summary}
                            onChange={(e) => handle_input_change("summary", e.target.value)}
                        />
                        <Inputs
                            header={InputMessage.server_url.header}
                            placeholder={InputMessage.server_url.placeholder}
                            info={InputMessage.server_url.info}

                            value={formData.url}
                            onChange={(e) => handle_input_change("url", e.target.value)}
                        />
                        <Inputs
                            header={InputMessage.pt_url.header}
                            placeholder={InputMessage.pt_url.placeholder}
                            info={InputMessage.pt_url.info}
                            star={InputMessage.pt_url.star}
                            caption={InputMessage.pt_url.caption}
                            
                            value={formData.video_url}
                            onChange={(e) => handle_input_change("video_url", e.target.value)}
                        />
                        <FileUpload onChange={handle_file_change} />
                    </UploadContainer>
                    <UploadButton 
                        onClick={handle_upload_button} 
                        // router 주소는 서버에서 주는 주소로 처리하기
        
                        text='PT 영상 업로드 하러 가기'
                        />
                </Items>
                <Footer />

                {isModal &&(
                    <Modal 
                        icon={ModalMessage.pt.icon}
                        message={ModalMessage.pt.message}
                        button={ModalMessage.pt.button}
                        onClose={handle_close_modal}
                    />
                )}
            </Container>
        </>
    );
}

export default Upload;