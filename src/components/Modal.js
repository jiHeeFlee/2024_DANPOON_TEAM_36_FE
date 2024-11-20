import { useState,useRef } from 'react'
import styled from 'styled-components';
import themeGet from '../utils/themeGet';
import { BsCheckCircleFill,BsFillExclamationCircleFill } from 'react-icons/bs';

import ModalButton from './ModalButton';
import { useNavigate } from 'react-router';

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: fixed;
    top: 0;
    left: 0;


    width: 100vw; 
    height: 100vh;

    box-sizing: border-box; 
    padding: 100px;

    background-color: #000000B2;

    z-index: 10;
`;
const ModalContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 400px;
    height: 312px;

    margin: 20px auto 40px auto;
    padding: 40px;

    border-radius: 20px;
    opacity: 0px;
    background-color: ${themeGet('color.white')};
    box-sizing: border-box;
    .icon{
        width: 60px;
        height: 60px;
        margin: 0px;
        color:${themeGet('color.main_light')};
    }
`;

const Message=styled.p`
    text-align: center;

    color : ${themeGet('color.500')};
    font-size:${themeGet('sub_head')};
    font-weight:600;
    letter-spacing: ${themeGet('fonts.sub_head.letter_spacing')};
    line-height:150%;

    white-space: pre-line; /* 줄바꿈 적용 */
`;

function Modal({ icon,message,button,onClose,router }){
    const navigate = useNavigate();
    const modalBackground = useRef();

    return(
        <>
            <Container
                ref={modalBackground}
                onClick={(e) => {
                    if (e.target === modalBackground.current) {
                        onClose(); // 모달 외부 클릭 시 onClose 콜백 호출
                    }
                }}
             >
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                    {icon === 'check' ? (
                        <BsCheckCircleFill className="icon" />
                    ) : (
                        <BsFillExclamationCircleFill className="icon" />
                    )}
                    <Message>{message}</Message>
                    <ModalButton 
                        type={button} 
                        button={button}
                        onClick={()=>{
                            if(router){
                                navigate(router)
                            }else{
                                onClose();
                            }
                        }}
                        />
                </ModalContainer>
            </Container>
        </>
    )
}

export default Modal;

