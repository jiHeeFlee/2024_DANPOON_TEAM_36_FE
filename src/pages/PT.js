import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import themeGet from "../utils/themeGet";
import NavigationBar from "../components/NavigationBar";
import GoToModalButton from "../components/PT/GoToModalButton";
import CommentInputWithSubmit from "../components/PT/CommentInputWithSubmit";
import { BiLink } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import CommentItem from "../components/PT/CommentItem";

const PT = () => {
  const navigate = useNavigate();
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // API로부터 받아올 데이터 목(mock) 설정
  const mockPTData = {
    title: "의사와 환자를 연결하는 원격 진료 서비스, 닥터나우",
    description: `닥터나우는 현대인들이 언제 어디서나 쉽게 의료 서비스를 받을 수 있도록 돕기 위해 만들어졌습니다.
                   원격 진료를 통해 의료 접근성을 높이고, 환자와 의사 간의 소통을 간편하게 만들고자 했습니다.
                   우리 서비스는 특히 바쁜 일상 속에서 의료를 필요로 하는 많은 사람들에게 큰 도움을 주고 있습니다.
                   앞으로도 더욱 발전하여 더 많은 분들에게 신뢰받는 헬스케어 솔루션을 제공하겠습니다.`,
    presenter: "최재형 대표님",
    company: "닥터 나우",
    date: "2024.10.28",
  };

  // 코멘트 데이터를 API로부터 받아오는 함수
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const mockComments = [
          { id: 1, author: "최규리", text: "영상 잘 보고 갑니다." },
          { id: 2, author: "이상원", text: "영상 잘 보고 갑니다. 동종업계 창업가로서 힘내봐요~" },
        ];
        setComments(mockComments);
      } catch (err) {
        setError("댓글을 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []); 

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleInvestButtonClick = () => {
    setIsInvestModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsInvestModalOpen(false);
  };



  const descriptionSentences = mockPTData.description.split(".").filter(Boolean);

  const handleDeleteButtonClick = (type) => {
    if (type === "pt") {
      setDeleteMessage("등록된 PT 영상을\n삭제하시겠습니까?");
    } else if (type === "comment") {
      setDeleteMessage("등록된 댓글을\n삭제하시겠습니까?");
    }
    setIsDeleteModalOpen(true); // 삭제 모달 열기
  };


  // const descriptionSentences = mockPTData.description.split(".");

  return (
    <Container>
      <Header>
        <NavigationBar />
        <TitleContainer>
          <Title>{mockPTData.title}</Title>
          <GoToModalButton
            color="white"
            size={36}
            onEdit={() => navigate('/upload')}  // 수정 페이지로 이동
            onDelete={handleDeleteButtonClick}  // 삭제 처리
            type="pt"  // PT 타입으로 설정
          />
        </TitleContainer>
        <Description>{descriptionSentences.map((sentence, index) => (
            <p key={index}>{sentence.trim()}{index !== descriptionSentences.length - 1 && '.'}</p>
          ))}</Description>
      </Header>
      <ContentContainer>
        <ContentSection>
          <ContentSectionLeft>
            <VideoContainer>영상</VideoContainer>

            <CommentInput>
              <CommentInputWithSubmit />
            </CommentInput>

            <CommentsWrapper>
              {isLoading ? (
                <p>Loading comments...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                comments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    author={comment.author}
                    text={comment.text}
                    onEdit={() => {}}
                    onDelete={() => {}}
                  />
                ))
              )}
            </CommentsWrapper>
          </ContentSectionLeft>

          <ContentSectionRight>
            <VideoInfo>
              <DateText>{mockPTData.date}</DateText>

              <PresenterWrapper>
                <Label>발표자</Label>
                <Name>{mockPTData.presenter}</Name>
              </PresenterWrapper>
              <CompanyWrapper>
                <Label>소속</Label>
                <CompanyContainer>
                  <Name>{mockPTData.company}</Name>
                </CompanyContainer>
              </CompanyWrapper>
              <ButtonWrapper>
                <ButtonContainer>
                  <StyledHeartIcon
                    size={36}
                    filled={isHeartFilled}
                    onClick={handleHeartClick}
                  />
                  <InvestButton onClick={handleInvestButtonClick}>투자 제안하기</InvestButton>
                </ButtonContainer>
              </ButtonWrapper>
            </VideoInfo>
          </ContentSectionRight>
        </ContentSection>
        <Footer />
      </ContentContainer>

      {isInvestModalOpen && (
        <Modal
          icon="check"
          message={"투자 제안이 완료되었습니다.\n 미팅 제안을 기다려주세요."}
          button="확인"
          onClose={handleCloseModal}
        />
      )}

      {/* 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <Modal
          icon="exclamation"
          message={deleteMessage}
          button="예"
          onClose={() => setIsDeleteModalOpen(false)}
          type="yes_no"
          onClick={() => {
            console.log("PT 삭제 처리");
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </Container>
  );
};

export default PT;


const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${themeGet("color.main")};
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: ${themeGet('color.main')};
  text-align: center;
  color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 40px 10vw 0 10vw;
  margin: 40px 0;
`;

const Title = styled.h1`
  font-size: ${themeGet("fonts.h1.size")};
  font-weight: bold;
`;

const Description = styled.div`
  font-size: ${themeGet("fonts.body1.size")};
  line-height: 1.6;
  padding: 40px 10vw;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  text-align: left;
`;

const ContentContainer = styled.section`
  border-top-right-radius: 200px;
  background-color: ${themeGet('color.100')};;
  width: 100%;
`

const ContentSection = styled.div`
  width: 80vw;
  margin: 80px auto;
  background: ${themeGet("color.white")};
  border-radius: 10px;

  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ContentSectionLeft = styled.div`
  width: 65vw;
  margin: 40px;
  background: ${themeGet("color.white")};
`;

const ContentSectionRight = styled.div`
  width: 35vw;
  padding: 5vh 0 5vh 3vw;
  background: ${themeGet("color.100")};
  display: flex;
  flex-direction: column;
`;
const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: ${themeGet("color.200")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateText = styled.div`
  color: ${themeGet("color.500")};
  font-size: ${themeGet("fonts.sub_head.size")};
  font-weight: bold;
  margin-bottom: 20px;
`;

const PresenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${themeGet("fonts.body1.size")};
  background-color: ${themeGet("color.white")};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1); 
  border-radius: 50px;
  margin-bottom: 20px;
  position: relative;
  width: 300px;
  height: 60px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet("color.main")};
  color: ${themeGet("color.white")};
  font-weight: bold;
  border: none;
  border-radius: 50px;
  position: absolute;
  left: 0;
  width: 93px;
  height: 60px;
  z-index: 0;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  border: none;
  color: ${themeGet("color.500")};
  margin-left: 16px;
`;

const CompanyWrapper = styled(PresenterWrapper)``;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
  margin-left: 93px;
`;
const StyledBiLink = styled(BiLink)`
  cursor: pointer;
  color: ${themeGet("color.400")};
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  background: none;
  margin-top: 40px;
`;
const StyledHeartIcon = styled(BsFillHeartFill)`
  color: ${(props) => (props.filled ? "#F25454" : themeGet("color.300"))};
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
`;
const InvestButton = styled.button`
  width: 224px;
  height: 60px;
  margin-left: 20px;
  border: 1px solid ${themeGet("color.main")};
  color: ${themeGet("color.main")};
  background: ${themeGet("color.white")};
  border-radius: 10px;
  font-size: ${themeGet("fonts.body1.size")};
  cursor: pointer;
`;
const CommentInput = styled.div`
  display: flex;
  gap: 1rem;
`;

const CommentsWrapper = styled.div`
  margin-top: 40px;
`;
