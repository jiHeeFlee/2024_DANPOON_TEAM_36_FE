import { useState } from "react";
import styled from "styled-components";
import themeGet from "../utils/themeGet";

import NavigationBar from "../components/NavigationBar";
import Inputs from "../components/InputUpload";
import InputMessage from "../constants/InputMessage";

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
    
    const handle_close_modal=()=>{
        setIsModal(false);
    }

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
                    </UploadContainer>
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