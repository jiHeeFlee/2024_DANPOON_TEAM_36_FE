import styled from "styled-components";
import themeGet from "../utils/themeGet";

import { Radio, RadioGroup } from "./Signup/RadioComponents";
import Checkbox from "./Signup/Checkbox";
import { useEffect, useState } from "react";

function Inputs({
  header,
  placeholder,
  info = "",
  star = false,
  caption = "",

  type = "text",
  textArea = false,
  options = [],
  label = "",

  value,
  onChange,
  checkedValue,
  onRadioChange,

  isCheckBox,
}) {
  const handleChange = onChange || (() => {});
  return (
    <Container>
      {/* header가 있을 때만 Header 컴포넌트를 렌더링 */}
      {header &&
        (star ? (
          <Header info={info}>
            {header}
            <span>*</span>
          </Header>
        ) : (
          <Header info={info}>{header}</Header>
        ))}

      {/* info가 있을 때만 Info 컴포넌트를 렌더링 */}
      {info && <Info>{info}</Info>}

      {/* textArea일 때만 렌더링 */}
      {type === "textarea" && placeholder && (
        <TextAreaItem
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {/* radio일 때만 렌더링 */}
      {type === "radio" && options.length > 0 && (
        <RadioGroup>
          {options.map((option, index) => (
            <RadioContents
              key={index}
              name={header}
              value={option.value}
              checkedValue={checkedValue === option.value}
              onChange={(e) => {
                onRadioChange(e);
                handleChange(e);
              }}
            >
              <RadioText>{option.label}</RadioText>
            </RadioContents>
          ))}
        </RadioGroup>
      )}

      {/* checkbox일 때만 렌더링 */}
      {type === "checkBox" && label && (
        <Checkbox
          label={label}
          star={star}
          isCheckBox={isCheckBox}
          checked={checkedValue}
          handler={onChange}
        />
      )}

      {/* text 입력 필드일 때만 렌더링 */}
      {type === "text" && placeholder && (
        <InputItem
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {/* caption이 있을 때만 렌더링 */}
      {caption && <Caption>{caption}</Caption>}
    </Container>
  );
}

export default Inputs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: start;

  width: 100%;

  span {
    margin-left: 5px;
    color: ${themeGet("color.main")};
    font-size: ${themeGet("fonts.sub_head.size")};
    font-weight: 600;
  }
`;

const Header = styled.p`
  margin: 0px 0px 16px 0px;
  margin: ${({ info }) =>
    info === "" ? "0px 0px 16px 0px" : "8px 0px 8px 0px"};

  color: ${themeGet("color.500")};
  font-size: ${themeGet("fonts.sub_head.size")};
  font-weight: 600;
  letter-spacing: -0.015em;
`;

const Info = styled.p`
  margin: 0px 0px 8px 0px;

  color: ${themeGet("color.400")};
  font-size: ${themeGet("fonts.caption.size")};
  font-weight: ${themeGet("fonts.caption.weight")};
`;

const InputItem = styled.input`
  width: 100%; /* width 값 전달받아 사용 */

  padding: 18px 20px;
  border-radius: 5px;
  border: 1px solid ${themeGet("color.300")};

  color: ${themeGet("color.500")};
  background-color: ${themeGet("color.whites")};
  background-color: transparent;
  box-sizing: border-box; /* box-sizing을 설정하여 padding과 border가 너비에 포함되도록 함 */

  &::placeholder {
    color: ${themeGet("color.300")};
  }

  &:focus {
    outline: none;
    border: 1px solid ${themeGet("color.main")};
    transition: border 0.3s;
  }
`;

const TextAreaItem = styled.textarea`
  width: 100%;
  /* width: inherit; */
  height: 180px;
  resize: none;
  box-sizing: border-box; /* box-sizing을 설정하여 padding과 border가 너비에 포함되도록 함 */

  padding: 18px 20px;
  border-radius: 5px;
  border: 1px solid ${themeGet("color.300")};
  color: ${themeGet("color.500")};
  background-color: ${themeGet("color.whites")};
  background-color: transparent;

  &::placeholder {
    color: ${themeGet("color.300")};
  }

  &:focus {
    outline: none;
    border: 1px solid ${themeGet("color.main")};
    transition: border 0.3s;
  }
`;

const RadioContents = styled(Radio)`
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  background-color: red;
`;

const RadioText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;

  color: ${themeGet("color.500")};
`;
const Caption = styled.p`
  margin-top: 7px;

  font-size: ${themeGet("fonts.caption.size")};
  font-weight: 400;
  color: ${themeGet("color.main")};
`;
