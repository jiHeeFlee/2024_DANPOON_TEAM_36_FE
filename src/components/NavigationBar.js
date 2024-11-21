import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import themeGet from "../utils/themeGet";
import { BsBoxArrowInRight,BsFillArrowLeftSquareFill,
    BsPersonFill,
    BsFileEarmarkCheckFill,
    BsArrowRightSquareFill
} from 'react-icons/bs';
import Modal from '../components/Modal';


function NavigationBar({active}){
    const [isLogin,setIsLogin]=useState(true);

    // 로그 아웃 시 기능
    // const handle_logout_click=()=>{}

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
                        {isLogin && (
                            <Nav_item>
                                <BsFillArrowLeftSquareFill size={25}/>
                                로그아웃
                            </Nav_item>
                        )}
                        {!isLogin && (
                            <Nav_item>
                                <BsArrowRightSquareFill size={25}/>
                                로그인
                            </Nav_item>
                        )}
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
    align-items: start;

    padding: 20px;

    color: ${themeGet('color.white')};

    box-sizing: border-box;
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

    padding-bottom: 11px;
    box-sizing: border-box;
    border-bottom: 5px solid transparent;
    &:hover{
        font-weight: 700;
        border-bottom: 5px solid ${themeGet('color.white')};
    }
`;

const StyledLink=styled(Link)`
    text-decoration: none;
    color: ${themeGet('color.white')};
`;