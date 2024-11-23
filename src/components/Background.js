import styled from "styled-components";
import themeGet from "../utils/themeGet";

const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 80px 120px;
    width: 100%;
    height: 100%;

    background-color: ${(props)=>
        props.backgroundGradient
        ? 'transparent'
        :themeGet('color.100')
    };


    ${(props)=>
        props.round === 'left'
        ? 'border-top-left-radius : 200px'
        : props.round === 'right'
        ? 'border-top-right-radius : 200px'
        : ''
    }
`;

function Background({round='', children}){

    return(
        <>
            <Container 
                round={round}
            >{children}</Container>
        </>
    );
}

export default Background;
