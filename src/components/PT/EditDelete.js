import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import themeGet from '../../utils/themeGet';

import { BiDotsVerticalRounded } from 'react-icons/bi';

function EditDelete({color, size, onDelete, type}){
    const navigate=useNavigate();
    const [isOpen, setIsOpne]=useState(false);

    return(
        <Container>
            <Button 
                color={color}
                size={size}
                onClick={()=>setIsOpne((prev)=>!prev)}
            />
        
            {isOpen && (
                <Wrapper>
                    <Items onClick={()=>navigate('/upload')}>수정</Items>
                    <Items 
                        onClick={()=>{
                            console.log("삭제 버튼 클릭됨, type:", type); // 디버깅 추가
                            onDelete(type)}}>삭제</Items>
                </Wrapper>
            )}
        
        </Container>
    )
}

export default EditDelete;

const Container=styled.div`
  position: relative;
  color: ${themeGet('color.300')};
`;
// const ButtonWrapper=styled.div`
//   background: none;
//   border: none;
//   cursor: pointer;
// `;
const Button=styled(BiDotsVerticalRounded)`
    color: ${({ color }) => color || '#CECECE'};

    &:hover{
    color: ${themeGet('color.400')};
    transition: all 0.3s;
    };
    &:active{
    color: ${themeGet('color.500')};
    transition: all 0.3s;
    };
    cursor: pointer;
`;
const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 100%;
  left: -40px;

  width: 80px;
  height: 56px;

  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid ${themeGet('color.300')};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${themeGet('color.300')};
  }
`;
const Items=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 28px;
  
  color: ${themeGet('color.400')};
  background-color: ${themeGet('color.white')};
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all background-color 0.2s;

  &:hover {
    background-color: ${themeGet('color.300')};
    color: ${themeGet('color.white')}
  }
`;