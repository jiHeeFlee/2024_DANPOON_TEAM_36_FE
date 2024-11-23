import { Link } from 'react-router-dom';
import styled from "styled-components";
import themeGet from "../utils/themeGet";
import { BsBoxArrowInRight,
    BsPersonFill,
    BsFileEarmarkCheckFill,
    BsArrowRightSquareFill
} from 'react-icons/bs';


function NavigationBar(){

    return(
        <>
            <Container>
                <StyledLink to={'/'}>
                    <Logo>YE;Summit!</Logo>
                </StyledLink>
                <Nav_container>
                    <StyledLink to={'/ongoingsummit'}>
                        <Nav_item>
                            <BsFileEarmarkCheckFill size={25}/>
                            진행중인 써밋
                        </Nav_item>
                    </StyledLink>
                    <StyledLink to={'/mypage'}>
                        <Nav_item>
                            <BsPersonFill size={25}/>
                            마이페이지
                        </Nav_item>
                    </StyledLink>
                    <StyledLink to={'/login'}>
                        <Nav_item>
                            <BsArrowRightSquareFill size={25}/>
                            로그인
                        </Nav_item>
                    </StyledLink>
                </Nav_container>
            </Container>
        </>
    )
}

export default NavigationBar;


const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    color: ${themeGet('color.white')};
`;

const Logo=styled.p`
    font-size: ${themeGet('fonts.h3.size')};
    font-weight: 700;
`;

const Nav_container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;

    margin: auto 0 auto auto;
`;

const Nav_item=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    flex-wrap: wrap;
    gap:10px;

    font-size: ${themeGet('fonts.body1.size')};
`;

const StyledLink=styled(Link)`
    text-decoration: none;
    color: ${themeGet('color.white')};
`;