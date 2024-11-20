import { useState } from "react";
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

  const [isTalk, setIsTalk] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [participant_type, set_participant_type] = useState("YOUTH");

  const [isModal, setIsModal] = useState(false);
  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [isRequiredChecked, setIsRequiredChecked] = useState(false);
  const [isOptionalChecked, setIsOptionalChecked] = useState(false);

  // checkbox test
  const [isCheckBox, setIsCheckBox] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    participant_type: "YOUTH",
    company: "",
    company_position: "",
    registration_number: "",
    idea_sector: "",
    talk: false,
    agreement: true,
  });

  const handle_checkBox = () => {
    setIsCheckBox((prev) => !prev); // 클릭 상태 토글
  };

  const handle_radio_position = (e) => {
    const { value } = e.target;

    set_participant_type(value);
    setFormData((prevData) => ({
      ...prevData,
      participant_type: value,
    }));
  };

  const handle_radio_talk = (e) => {
    const { value } = e.target;

    // 문자열 "true"를 boolean true로 변환
    const boolean_value = value === "true";

    setIsTalk(boolean_value);
    setFormData((prevData) => ({
      ...prevData,
      talk: boolean_value,
    }));
  };

  const handle_checkbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handle_input_change = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleHeaderCheckbox = (e) => {
    // const checked = e.target.checked;
    const new_checked_state = !isHeaderChecked;
    setIsHeaderChecked(new_checked_state);
    setIsRequiredChecked(new_checked_state);
    setIsOptionalChecked(new_checked_state);
    console.log("isHeaderChecked : ", isHeaderChecked);
    console.log("isRequiredChecked : ", isRequiredChecked);
    console.log("isOptionalChecked : ", isOptionalChecked);
  };
  const handleRequiredCheckbox = (e) => {
    // setIsRequiredChecked(e.target.checked);
    setIsRequiredChecked((prev) => !prev);
  };
  const handleOptionalCheckbox = (e) => {
    setIsOptionalChecked(e.target.checked);
    setIsOptionalChecked((prev) => !prev);
  };

  const handle_upload_button = () => {
    if (!isRequiredChecked) {
      setIsModal(true); // 필수 약관 미동의 모달 출력
    } else {
      console.log("회원 정보 등록 완료!");
      console.log("upload form data : ", { ...formData });
      setIsModal(true);
    }
  };

  const handle_close_modal = () => {
    navigate("/");
    setIsModal(false);
  };
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
              onChange={(e) => handle_input_change("name", e.target.value)}
            />

            {/* 연락처  */}
            <Inputs
              header={InputMessage.signup.contact.header}
              placeholder={InputMessage.signup.contact.placeholder}
              star={InputMessage.signup.contact.star}
              caption={InputMessage.signup.contact.caption}
              onChange={(e) => handle_input_change("contact", e.target.value)}
            />

            {/* 이메일  */}
            <Inputs
              header={InputMessage.signup.email.header}
              placeholder={InputMessage.signup.email.placeholder}
              star={InputMessage.signup.email.star}
              caption={InputMessage.signup.email.caption}
              onChange={(e) => handle_input_change("email", e.target.value)}
            />

            {/* Radio Group : 참여자 구분 */}
            <Inputs
              header={"참여자 구분"}
              star="true"
              caption={InputMessage.signup.participant_position.caption}
              type="radio"
              options={[
                { label: "청년 창업가", value: "YOUTH" },
                { label: "예비 투자자", value: "INVESTOR" },
              ]}
              checkedValue={
                InputMessage.signup.participant_position.position.youth.value
              }
              onRadioChange={handle_radio_position}
              onChange={(e) =>
                handle_input_change("participant_type", e.target.value)
              }
            />

            <CompanyWrapper>
              {/* 소속 회사  */}
              <CompanyInputs
                header={InputMessage.signup.company.header}
                placeholder={InputMessage.signup.company.placeholder}
                star={InputMessage.signup.company.star}
                caption={InputMessage.signup.company.caption}
                onChange={(e) => handle_input_change("company", e.target.value)}
              />
              {/* 사내 직책  */}
              <CompanyInputs
                header={InputMessage.signup.position.header}
                placeholder={InputMessage.signup.position.placeholder}
                star={InputMessage.signup.position.star}
                caption={InputMessage.signup.position.caption}
                onChange={(e) =>
                  handle_input_change("company_position", e.target.value)
                }
              />
            </CompanyWrapper>

            {/* 사업자 등록 번호  */}
            <Inputs
              header={InputMessage.signup.registration_number.header}
              placeholder={InputMessage.signup.registration_number.placeholder}
              star={InputMessage.signup.registration_number.star}
              caption={InputMessage.signup.registration_number.caption}
              onChange={(e) =>
                handle_input_change("registration_number", e.target.value)
              }
            />
            {/* 투자 관심 분야  */}
            <Inputs
              header={InputMessage.signup.idea_sector.header}
              placeholder={InputMessage.signup.idea_sector.placeholder}
              star={InputMessage.signup.idea_sector.star}
              onChange={(e) =>
                handle_input_change("idea_sector", e.target.value)
              }
            />

            {/* Radio Group : 써밋 알림톡 수신 */}
            <Inputs
              header={"써밋 알림톡 수신"}
              star="true"
              info={InputMessage.alert.info}
              caption={InputMessage.alert.caption}
              type="radio"
              options={[
                { label: "동의", value: true },
                { label: "미동의", value: false },
              ]}
              checkedValue={formData.talk}
              onRadioChange={handle_radio_talk}
              onChange={(e) => handle_input_change("talk", e.target.value)}
            />

            {/* checkBox Grop : 개인정보수집 및 이용동의 */}
            <CheckboxContainer onClick={handle_checkBox}>
              <Inputs
                header="개인정보수집 및 이용동의"
                type="checkBox"
                label={
                  <p style={{ color: "#333", fontWeight: "600" }}>전체 동의</p>
                }
                className="header"
                // isCheckBox={isCheckBox}
                // onChange={(e) => handle_input_change("agreement", e.target.value)}
                checked={isHeaderChecked}
                // onChange={handleHeaderCheckbox} // 전체 선택 동작
                onClick={handleHeaderCheckbox}
              />

              {/* 아래 두개의 체크박스는 onChange 설정안함 */}
              <Inputs
                caption={
                  <p style={{ textAlign: "center" }}>
                    <span style={{ color: "#FF582D", fontSize: "14px" }}>
                      *
                    </span>{" "}
                    필수 입력 항목입니다.
                  </p>
                }
                type="checkBox"
                label={
                  <p style={{ margin: 0, padding: 0, textAlign: "center" }}>
                    <span style={{ color: "#FF582D", fontSize: "14px" }}>
                      (필수)
                    </span>
                    등록을 위한 개인정보 수집 및 이용에 동의합니다.
                    <span style={{ color: "#FF582D", fontSize: "14px" }}>
                      *
                    </span>
                  </p>
                }
                // onClick={handle_checkbox}
                onClick={handleRequiredCheckbox}
                checked={isRequiredChecked}
                onChange={handleRequiredCheckbox} // 필수 선택 동작
              />
              <Inputs
                type="checkBox"
                label={
                  <p style={{ margin: 0, padding: 0, textAlign: "center" }}>
                    <span
                      style={{
                        color: "#707070",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      (선택)
                    </span>
                    등록을 위한 개인정보 수집 및 이용에 동의합니다.
                    <span
                      style={{
                        color: "#707070",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      (선택 정보)
                    </span>
                  </p>
                }
                style={{ marginTop: "16px" }}
                // onClick={handle_checkbox}
                onClick={handleOptionalCheckbox}
                checked={isOptionalChecked}
                onChange={handleOptionalCheckbox} // 선택 동작
              />
            </CheckboxContainer>
          </SignupContainer>

          {/* 회원 정보 등록 버튼 : 버튼 클릭시 api 통신 */}
          <UploadButton
            onClick={handle_upload_button}
            text="회원 정보 등록하기"
          />
        </Items>
        <Footer />

        {/* 약관 미동의 시 출력되는 모달창 */}
        {isModal && !isChecked && (
          <Modal
            icon={ModalMessage.agree.icon}
            message={ModalMessage.agree.message}
            button={ModalMessage.agree.button}
          />
        )}

        {/* 모달 백그라운드 선택 시 모달 없어짐  */}
        {isModal && (
          <Modal
            icon={ModalMessage.signup.icon}
            message={ModalMessage.signup.message}
            button={ModalMessage.signup.button}
            //백그라운드 클릭 시 메인으로 이동하게 설정
            onClose={handle_close_modal}
          />
        )}
      </Container>
    </>
  );
}

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

const SignupContainer = styled.div`
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

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 16px;

  .header {
    margin-bottom: 40px;
  }
`;
