import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import themeGet from "../../utils/themeGet";
import { BsFillPlusCircleFill } from 'react-icons/bs';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .uploadArea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 180px;
        position: relative;

        color: ${themeGet('color.400')};
        border: 1.5px dashed ${themeGet('color.300')};
        border-radius: 5px;
        overflow: hidden;

        cursor:pointer;

        .icon, p {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0;

            /* visibility: ${props=>props.previewSrc ? 'hidden' : 'visible'}; */
            visibility: visible;

            margin-bottom: 2px;
        }
        }

        img {
            width: 100%;
            height: 100%;

            object-fit: contain;
            position: relative;

            top: 0;
            left: 0;
            z-index: 1;

            margin-bottom: 2px;
        }

        p {
            margin: 5px 0px;
            z-index: 2;
            position: relative;
        }
    

    input {
        display: none;
    }

    label {
        display: block;
        position: relative;

        padding: 20px;

        box-sizing: border-box; /* box-sizing을 설정하여 padding과 border가 너비에 포함되도록 함 */

        &:hover{
            color: ${themeGet('color.main')};
            border-color: ${themeGet('color.main')};
            transition: all 0.3s;
        }
    }
`;

const Header = styled.p`
    width: 100%;
    color: ${themeGet('color.500')};
    font-size: ${themeGet('fonts.sub_head.size')};
    font-weight: 600;
    letter-spacing: -0.015em;
`;

function FileUpload({onChange}) {
    const fileInputRef = useRef(null);

    const [previewSrc,setPreviewSrc] = useState(null);
    const [fileName, setFileName] = useState("파일 선택");
 
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file){
            // 이전에 생성된 URL 해체
            if(previewSrc){
                URL.revokeObjectURL(previewSrc);
            }
            const imageSrc=URL.createObjectURL(file);
            setPreviewSrc(imageSrc); // 미리보기 URL 업데이트
            setFileName(file.name); // 파일명 업데이트

            onChange(file);
        }
    };

    useEffect(() => {
        if (fileInputRef.current) {
            fileInputRef.current.addEventListener('change', handleFileChange);
        }

        return () => {
            if (fileInputRef.current) {
                fileInputRef.current.removeEventListener('change', handleFileChange);
            }
            if(previewSrc){
                URL.revokeObjectURL(previewSrc);
            }
        };
    }, [previewSrc]);

    return (
        <Container previewSrc={previewSrc}>
            <Header>PT 영상 썸네일</Header>
            <label htmlFor="file" className="uploadArea">
                {previewSrc && (
                    <img src={previewSrc} alt="미리보기 이미지" className="image-box" />
                )}
                <input 
                    id="file"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                />
                <BsFillPlusCircleFill className="icon" />
                <p>{fileName}</p>
            </label>
        </Container>
    );
}

export default FileUpload;