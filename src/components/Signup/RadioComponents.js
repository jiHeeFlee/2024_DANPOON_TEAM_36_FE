import styled from "styled-components";
import themeGet from "../../utils/themeGet";

export const RadioGroup = ({ label, children }) => (
  <RadioContainer>
    <div>{label}</div>
    <div>{children}</div>
  </RadioContainer>
);
export const Radio = ({ name, value, checked, onChange, children }) => {
  return (
    <RadioWrapper checked={checked}>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioIcon checked={checked} />
      {children}
    </RadioWrapper>
  );
};


const RadioContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;

const RadioWrapper = styled.label`
  display: inline-block;
  margin-right: 10px;
  padding-left: 25px;

  position: relative;

  font-weight: 700;
  cursor: pointer;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span:after {
    display: block;
  }
`;

const RadioIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  /* border: 2.5px solid ${(props) => (props.checked ? "#333" : "#333")}; */
  border: 2.5px solid ${themeGet('color.500')};
  background-color: #fff;
  /* background-color: ${(props) => (props.checked ? "#fff" : "#333")}; */

  &:after {
    content: "";
    position: absolute;
    /* display: none; */
    display: ${(props) => (props.checked ? "block" : "none")};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    /* background-color: #333; */

    background-color: ${(props) => (props.checked ? "#fff" : "#333")};
    color: ${(props) => (props.checked ? "#fff" : "#333")};
  }
`;