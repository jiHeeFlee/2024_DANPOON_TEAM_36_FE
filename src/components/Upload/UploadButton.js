import { Link } from "react-router-dom";
import styled from "styled-components";
import themeGet from "../../utils/themeGet";

const Container=styled.button`
    text-align: center;
    align-items: center;

    width: 280px;
    height: 60px;
    
    color: ${themeGet('color.main')};
    background-color: ${themeGet('color.white')};
    border: 1.5px solid ${themeGet('color.main')};
    border-radius: ${themeGet('border.radius.main')};

    font-size: ${themeGet('fonts.body1.size')};
    font-weight: ${themeGet('fonts.body1.weight')};

    letter-spacing: ${themeGet('fonts.body1.letter_spacing')};

    &:hover{
        color: ${themeGet('color.white')};
        background-color: ${themeGet('color.salmon')};
        transition: all 0.3s;
    }

    &:active{
        color: ${themeGet('color.white')};
        background-color: ${themeGet('color.main')};
        transition: all 0.3s;
    }
`;

function UploadButton({text,onClick}){

    return(
        <>
            <Container onClick={onClick}>
                {text}
            </Container>
        </>
    )
}

export default UploadButton;