import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import themeGet from "../utils/themeGet";

import NavigationBar from "../components/NavigationBar";
import Inputs from "../components/Inputs";
import UploadButton from "../components/Upload/UploadButton";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

import InputMessage from "../constants/InputMessage";
import { ModalMessage } from "../constants/ModalMessage";


function SignUp() {
  const navigate = useNavigate();

  const [participant_type, setParticipantType] = useState('YOUTH');

  const [isTalk, setIsTalk] = useState(true);
  
  const [isChecked, setIsChecked] = useState(false);
  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [isFullAgreement, setIsFullAgreement] = useState(false);
  const [isRequiredChecked, setIsRequiredChecked] = useState(false);
  const [isOptionalChecked, setIsOptionalChecked] = useState(false);

  const [isModal, setIsModal] = useState(false);
  

  const [formData, setFormData] = useState({
    'loginUser': { memberId: 0 },
    'memberSignUpDTO': {
      name: 'XMzjolYHkbBuBHqmIxtsMY',
      phoneNumber: 'string',
      email: 'string',
      userType: 'ENTREPRENEUR',
      company: 'string',
      position: 'string',
      businessRegistrationNumber: 'string',
      businessIdeaField: 'string',
      consentSummitAlerts: true,
      consentPrivacyPolicy: false
    }
  });

  const handleCheckBox = () => {
    setIsCheckBox((prev) => !prev);
  };

  const handleRadioPosition = (e) => {
    const { value } = e.target;
    setParticipantType(value);
    setFormData((prevData) => ({
      ...prevData,
      participant_type: value,
    }));
  };

  const handleRadioTalk = (e) => {
    const { value } = e.target;
    const booleanValue = value === 'true';
    setIsTalk(booleanValue);
    setFormData((prevData) => ({
      ...prevData,
      consentSummitAlerts: booleanValue,
    }));
  };
  
  
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    console.log(`${field}가 변경됨: ${value}`);
  };
  
  const handleAllCheckbox = (e) => {
    const checked = e.target.checked;
    setIsFullAgreement(checked);
    setIsRequiredChecked(checked);
    setIsOptionalChecked(checked);
    
    console.log('isFullAgreement : ', isFullAgreement);
    console.log('isRequiredChecked : ', isRequiredChecked);
    console.log('isOptionalChecked : ', isOptionalChecked);
  };
  const handleRequiredCheckbox = () => {
    setIsRequiredChecked((prev) => !prev);
  };
  const handleOptionalCheckbox = (e) => {
    setIsOptionalChecked((prev) => !prev);
    setIsOptionalChecked(e.target.checked);
  };
  useEffect(() => {
    setIsHeaderChecked(isRequiredChecked && isOptionalChecked);
  }, [isRequiredChecked, isOptionalChecked]);
  
  const handleUploadButton = () => {
    if (!isRequiredChecked) {
      setIsModal(true); // 필수 약관 미동의 모달 출력
    } else {
      console.log('회원 정보 등록 완료!');
      console.log('upload form data : ', { ...formData });
      setIsModal(true);
    }
  };

  const handleCheckRequired=()=>{
    setIsModal(false);
  }

  const handleCloseModal = () => {
    navigate('/');
    setIsModal(false);
  };

  useEffect(() => {
    if (isModal) {
      console.log('Modal is now open.');
    } else {
      console.log('Modal is now close.');
    }
  }, [isModal]);

  return (
    <>
      <Container>
        <NavigationBar />
        <Items>
          <Header>회원 정보를 등록해주세요</Header>
          <SignupContainer>
            {/* 이름 */}
            <Inputs 
              header={InputMessage.signup.name.header} 
              placeholder={InputMessage.signup.name.placeholder} 
              star={InputMessage.signup.name.star}
              caption={InputMessage.signup.name.caption}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />

            {/* 연락처  */}
            <Inputs 
              header={InputMessage.signup.contact.header} 
              placeholder={InputMessage.signup.contact.placeholder} 
              star={InputMessage.signup.contact.star}
              caption={InputMessage.signup.contact.caption}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />

            {/* 이메일  */}
            <Inputs 
              header={InputMessage.signup.email.header} 
              placeholder={InputMessage.signup.email.placeholder} 
              star={InputMessage.signup.email.star}
              caption={InputMessage.signup.email.caption}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            
            {/* Radio Group : 참여자 구분 */}
            <Inputs
              header={'참여자 구분'}
              star='true'
              caption={InputMessage.signup.participant_position.caption}
              type='radio'
              options={[
                {label: '청년 창업가', value: 'YOUTH'},
                {label: '예비 투자자', value: 'INVESTOR'}
              ]}
              checkedValue={InputMessage.signup.participant_position.position.youth.value}
              onRadioChange={handleRadioPosition}
              onChange={(e) => handleInputChange("userType", e.target.value)}
            />

            <CompanyWrapper>
              {/* 소속 회사  */}
              <CompanyInputs
                header={InputMessage.signup.company.header} 
                placeholder={InputMessage.signup.company.placeholder} 
                star={InputMessage.signup.company.star}
                caption={InputMessage.signup.company.caption}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
              {/* 사내 직책  */}
              <CompanyInputs 
                header={InputMessage.signup.position.header} 
                placeholder={InputMessage.signup.position.placeholder} 
                star={InputMessage.signup.position.star}
                caption={InputMessage.signup.position.caption}
                onChange={(e) => handleInputChange("position", e.target.value)}
              />
            </CompanyWrapper>
            
            {/* 사업자 등록 번호  */}
            <Inputs 
              header={InputMessage.signup.registration_number.header} 
              placeholder={InputMessage.signup.registration_number.placeholder} 
              star={InputMessage.signup.registration_number.star}
              caption={InputMessage.signup.registration_number.caption}
              onChange={(e) => handleInputChange("businessRegistrationNumber", e.target.value)}
            />
            {/* 투자 관심 분야  */}
            <Inputs 
              header={InputMessage.signup.idea_sector.header} 
              placeholder={InputMessage.signup.idea_sector.placeholder} 
              star={InputMessage.signup.idea_sector.star}
              onChange={(e) => handleInputChange("businessIdeaField", e.target.value)}
            />

            {/* Radio Group : 써밋 알림톡 수신 */}
            <Inputs
              header={'써밋 알림톡 수신'}
              star='true'
              info={InputMessage.alert.info}
              caption={InputMessage.alert.caption}
              type='radio'
              options={[
                {label: '동의', value: true},
                {label: '미동의', value: false}
              ]}
              checkedValue={formData.memberSignUpDTO.consentSummitAlerts}
              onRadioChange={handleRadioTalk}
              onChange={(e) => handleInputChange("consentSummitAlerts", e.target.value)}
            />

            {/* checkBox Group : 개인정보수집 및 이용동의 */}
            <CheckboxContainer onClick={handleCheckBox}>
              <Inputs 
                header='개인정보수집 및 이용동의'
                type="checkBox"
                label={<p style={{color: '#333', fontWeight: '600'}}>전체 동의</p>}
                checked={isFullAgreement}
                onChange={handleAllCheckbox} // 전체 선택 동작
              />

              {/* 필수 체크 박스 */}
              <Inputs 
                type="checkBox"
                caption={
                  <p style={{textAlign: 'center'}}>
                    <span style={{color: '#FF582D' , fontSize: '14px'}}>*</span> 필수 입력 항목입니다.
                  </p>}
                label={
                  <p style={{margin: 0, padding: 0, textAlign: 'center'}}>
                    <span style={{color: '#FF582D', fontSize: '14px'}}>(필수)</span> 
                    등록을 위한 개인정보 수집 및 이용에 동의합니다.
                    <span style={{color: '#FF582D', fontSize: '14px'}}>*</span>
                  </p>
                }
                checkedValue={isRequiredChecked}
                onChange={handleRequiredCheckbox} // 필수 선택 동작
              />
              {/* 선택 체크 박스 */}
              <Inputs 
                type="checkBox"
                label={
                  <p style={{margin:0, padding:0, textAlign:'center'}}>
                      <span style={{color:'#707070', fontSize:'14px', fontWeight:'500'}}>(선택)</span>
                      등록을 위한 개인정보 수집 및 이용에 동의합니다. 
                      <span style={{color:'#707070', fontSize:'14px', fontWeight:'500'}}>(선택 정보)</span>
                  </p>
                }
                style={{marginTop:'16px'}}

                onClick={handleOptionalCheckbox}
                checkedValue={isOptionalChecked}
                onChange={handleOptionalCheckbox} // 선택 동의 핸들러

              />
            </CheckboxContainer>

          </SignupContainer>

          {/* 회원 정보 등록 버튼 : 버튼 클릭시 api 통신 */}
          <UploadButton 
            onClick={handleUploadButton}
            text='회원 정보 등록하기'
          />
        </Items>
        <Footer />

        {/* 약관 미동의 시 출력되는 모달창 */}
        {(isModal && ( isRequiredChecked === false )) && (
          <Modal 
            icon={ModalMessage.agree.icon}
            message={ModalMessage.agree.message}
            button={ModalMessage.agree.button}

            onClose={handleCheckRequired}
          />
        )}

        {/* 모달 백그라운드 선택 시 모달 없어짐  */}
        {(isModal && ( isRequiredChecked === true )) &&(
          <Modal 
            icon={ModalMessage.signup.icon}
            message={ModalMessage.signup.message}
            button={ModalMessage.signup.button}

            //백그라운드 클릭 시 메인으로 이동하게 설정
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </>
  );
};

export default SignUp;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 250vh;

    background: linear-gradient(
        to top,
        ${themeGet("color.100")} 70%,
        ${themeGet("color.main")} 30%
    );
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.p`
    text-align: center;

    margin: 80px 0px;

    color: ${themeGet("color.white")};
    font-size: ${themeGet("fonts.h1.size")};
    font-weight: ${themeGet("fonts.h1.weight")};
`;

const SignupContainer=styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;

    width: 640px;
    height: auto;

    margin-bottom: 30px;
    padding: 80px;

    background-color: ${themeGet("color.white")};
    border-radius: 10px;
    box-shadow: 5px 5px 20px 2px #00000040;
`;

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  flex-wrap: nowrap;
  gap: 20px;
`;

const CompanyInputs = styled(Inputs)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  margin: 0;

  width: 100%;
`;

const CheckboxContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 16px;

  .header{
    margin-bottom: 40px;
  }
`;