import styled from "styled-components";
import themeGet from '../utils/themeGet';

const Ok = styled.button`
    padding: 16px 40px;
    color: ${themeGet('color.white') || '#000'}; 
    background-color: ${themeGet('color.main') || '#fff'};
    border: 1px solid ${themeGet('color.main') || '#000'};
    font-size: ${themeGet('fonts.body1.size') || '16px'};
    font-weight: ${themeGet('fonts.body1.weight') || '400'};
    border-radius: 10px;
    &:hover {
        color: ${themeGet('color.white')};
        background-color: ${themeGet('color.main_light')};
        border: 1px solid ${themeGet('color.main_light')};
        font-weight: 600;
        transition: all 0.3s;
    }
    &:active {
        color: ${themeGet('color.main')};
        background-color: ${themeGet('color.white')};
        border: 1px solid ${themeGet('color.main')};
        font-weight: 600;
        transition: all 0.3s;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

const Yes = styled.button`
    width: 120px;
    height: 60px;
    font-size: ${themeGet('fonts.body1.size') || '16px'};
    font-weight: ${themeGet('fonts.body1.weight') || '400'};
    color: ${themeGet('color.main') || '#000'};
    background-color: ${themeGet('color.white') || '#fff'};
    border-radius: 10px;
    border: 1px solid ${themeGet('color.main') || '#000'};
    &:hover {
        color: ${themeGet('color.white') || '#000'};
        background-color: ${themeGet('color.main_light') };
        border: 1px solid ${themeGet('color.main_light') };
        transition: all 0.3s;
    }
    &:active {
        color: ${themeGet('color.white') || '#fff'};
        background-color: ${themeGet('color.main') || '#000'};
        transition: all 0.3s;
    }
`;

const No = styled.button`
    width: 120px;
    height: 60px;
    font-size: ${themeGet('fonts.body1.size') || '16px'};
    font-weight: ${themeGet('fonts.body1.weight') || '400'};
    color: ${themeGet('color.white') || '#fff'};
    background-color: ${themeGet('color.main') || '#000'};
    border-radius: 10px;
    border: 1px solid ${themeGet('color.main') || '#000'};
    &:hover {
        color: ${themeGet('color.white') || '#000'};
        background-color: ${themeGet('color.main_light') };
        border: 1px solid ${themeGet('color.main_light') };
        transition: all 0.3s;
    }
    &:active {
        color: ${themeGet('color.main') };
        background-color: ${themeGet('color.white') || '#fff'};
        border: 1px solid ${themeGet('color.main') || '#000'};
        transition: all 0.3s;
    }
`;

function ModalButton({ button, type, onClick }) {
    return (
        <>
            {type === 'yes_no' ? (
                <ButtonContainer onClick={onClick}>
                    <Yes>예</Yes>
                    <No>아니오</No>
                </ButtonContainer>
            ) : (
                <Ok onClick={onClick}>
                    {button}
                </Ok>
            )}
        </>
    );
}

export default ModalButton;