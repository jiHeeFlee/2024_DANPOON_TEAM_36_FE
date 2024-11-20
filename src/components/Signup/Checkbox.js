import styled from "styled-components";
import themeGet from "../../utils/themeGet";
import IcGrayCheck from '../../assets/img/checkbox_img.svg';

const Checkbox = ({ id, label, checked, handler }) => {
  return (
    <CheckboxWrapper>
      <CheckboxStyle
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={handler}
      ></CheckboxStyle>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 8px;
`;

const CheckboxStyle = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid ${themeGet("color.500")};
  border-radius: 3px;
  &:checked {
    background-image: url(${IcGrayCheck});
    border-color: transparent;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const StyledLabel = styled.div`
  color: ${themeGet("color.500")};
  color: var(--500, #333);
  /* Body2 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.21px;
`;

export default Checkbox;