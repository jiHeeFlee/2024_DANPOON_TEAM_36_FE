import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";
import themeGet from "../utils/themeGet";
import { BsBoxArrowInRight, BsFillArrowLeftSquareFill, BsPersonFill, BsFileEarmarkCheckFill, BsArrowRightSquareFill } from 'react-icons/bs';
import Modal from '../components/Modal';

function NavigationBar() {
    const [isLogin, setIsLogin] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 가져오기

    useEffect(() => {
        // 로그인 여부를 확인하여 상태 업데이트
        setIsLogin(localStorage.getItem('accessToken') !== null);
    }, []);

    const handleMyPageClick = (e) => {
        e.preventDefault(); // 링크 기본 동작 방지
        if (location.pathname === '/signup') {
            // 현재 경로가 '/signup'이면 모달창 띄우기
            setIsModal(true);
        } else if (!isLogin) {
            // 로그인 상태가 아니라면 모달창 띄우기
            setIsModal(true);
        } else {
            // 로그인 상태일 경우 마이페이지로 이동
            navigate('/mypage');
        }
    };

    const handleCloseModal = () => {
        setIsModal(false); // 모달 닫기
    };

    const handle_clear_localStorage = () => {
        localStorage.clear();
        setIsLogin(false); // isLogin 상태 업데이트
        navigate('/'); // 홈 경로로 이동
    };

    return (
        <>
            <Container>
                <StyledLink to={'/'}>
                    <Logo>YE;Summit!</Logo>
                </StyledLink>
                <Nav_container>
                    <StyledLink to={'/ongoingsummit'}>
                        <Nav_item>
                            <BsFileEarmarkCheckFill size={25} />
                            진행중인 써밋
                        </Nav_item>
                    </StyledLink>
                    {/* 마이페이지 클릭 이벤트 처리 */}
                    <Nav_item onClick={handleMyPageClick}>
                        <BsPersonFill size={25} />
                        마이페이지
                    </Nav_item>
                    {isLogin ? (
                            <Nav_item onClick={handle_clear_localStorage}>
                                <BsFillArrowLeftSquareFill size={25} />
                                로그아웃
                            </Nav_item>
                        ) : (
                            <Nav_item onClick={()=>navigate('/login')}>
                                <BsArrowRightSquareFill size={25} />
                                로그인
                            </Nav_item>
                        )}
                </Nav_container>
            </Container>

            {/* 모달 렌더링 */}
            {isModal && (
                <Modal
                    icon="mark"
                    message="마이페이지로 이동하려면 로그인이 필요합니다."
                    button="확인"
                    onClose={handleCloseModal}
                    router="/login" // 로그인 페이지로 이동
                />
            )}
        </>
    );
}

export default NavigationBar;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 20px;
    color: ${themeGet('color.white')};
    box-sizing: border-box;
`;

const Logo = styled.p`
    font-size: ${themeGet('fonts.h3.size')};
    font-weight: 700;
`;

const Nav_container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: auto 0 auto auto;
`;

const Nav_item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    font-size: ${themeGet('fonts.body1.size')};
    padding-bottom: 11px;
    box-sizing: border-box;
    border-bottom: 5px solid transparent;
    &:hover {
        font-weight: 700;
        border-bottom: 5px solid ${themeGet('color.white')};
    }
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${themeGet('color.white')};
`;
