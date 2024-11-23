import styled from "styled-components";
import themeGet from "../utils/themeGet";

const Container=styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: start;

    width: 100%;

    span{
        margin-left: 5px;
        color: ${themeGet('color.main')};
        font-size: ${themeGet('fonts.sub_head.size')};
        font-weight: 600;
    }
`;

const Header=styled.p`
    margin: 0px 0px 16px 0px;
    margin: ${({ info }) => info === '' ? '0px 0px 16px 0px' : '8px 0px 8px 0px'};

    color: ${themeGet('color.500')};
    font-size: ${themeGet('fonts.sub_head.size')};
    font-weight: 600;
    letter-spacing: -0.015em;
`;

const Info=styled.p`
    margin: 0px 0px 8px 0px;

    color: ${themeGet('color.400')};
    font-size: ${themeGet('fonts.caption.size')};
    font-weight: ${themeGet('fonts.caption.weight')};
`;

const InputItem=styled.input`
    width: 100%;

    padding: 18px 20px ;
    border-radius: 5px;
    border: 1px solid ${themeGet('color.300')};
 
    color: ${themeGet('color.500')};
    background-color: ${themeGet('color.whites')};
    background-color: transparent;
    box-sizing: border-box; /* box-sizing을 설정하여 padding과 border가 너비에 포함되도록 함 */

    &::placeholder {
        color: ${themeGet('color.300')}; 
    }

    &:focus {
        outline: none;
        border: 1px solid ${themeGet('color.main')};
        transition: border 0.3s ;
    }
`;

const TextAreaItem=styled.textarea`
    width: 100%;
    height: 180px;
    resize: none;
    box-sizing: border-box; /* box-sizing을 설정하여 padding과 border가 너비에 포함되도록 함 */

    padding: 18px 20px;
    border-radius: 5px;
    border: 1px solid ${themeGet('color.300')};
    color: ${themeGet('color.500')};
    background-color: ${themeGet('color.whites')};
    background-color: transparent;

    &::placeholder {
        color: ${themeGet('color.300')};
    }

    &:focus {
        outline: none;
        border: 1px solid ${themeGet('color.main')};
        transition: border 0.3s ;
    }
`;

const Caption=styled.p`
    margin-top: 7px;

    font-size: ${themeGet('fonts.caption.size')};
    font-weight: 400;
    color: ${themeGet('color.main')};
`;

function InputUpload({
    header,
    placeholder,
    info='',
    star=false,
    textArea=false,
    caption='',

    value,
    onChange
}){
    return(
        <>
            <Container>
                {star &&
                    <Header info={info}>{header}<span>*</span></Header>
                }
                {!star &&
                    <Header info={info}>{header}</Header>
                }
                {info && <Info>{info}</Info>}
                {textArea ? (
                    <TextAreaItem 
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        />
                ):(
                    <InputItem 
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        />
                )}
                {caption &&<Caption>{caption}</Caption>}
            </Container>
        </>
    )
}

export default InputUpload;