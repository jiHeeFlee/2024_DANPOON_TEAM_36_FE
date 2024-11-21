import styled from 'styled-components';
import themeGet from '../../utils/themeGet';

function Features({text}){

    return(
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}

export default Features;

const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    max-width: 285px;

    color: ${themeGet('color.white')};
    background-color: ${themeGet('color.main')};
    border-radius: 50px;

    margin-top: 80px;
    margin-left: 100px;
    padding: 12px 40px;
`;

const Text=styled.p`
    color: ${themeGet('color.white')};
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: -0.015em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;