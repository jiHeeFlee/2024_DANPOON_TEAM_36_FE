import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import themeGet from '../../utils/themeGet';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const GoToModalButton = ({ color, size, onDelete, onEdit, type, id }) => {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 열기/닫기 상태

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-wrapper')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <MenuWrapper>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <BiDotsVerticalRoundedIcon color={color} size={size} />
      </MenuButton>

      {isOpen && (
        <Menu>
          <MenuItem onClick={onEdit}>수정</MenuItem>
          <MenuItem onClick={onDelete}>삭제</MenuItem>
        </Menu>
      )}
    </MenuWrapper>
  );
};

export default GoToModalButton;

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const BiDotsVerticalRoundedIcon = styled(BiDotsVerticalRounded)`
  color: ${({ color }) => color || 'white'};
`;

const Menu = styled.div`
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

const MenuItem = styled.button`
  width: 100%;
  height: 28px;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: ${themeGet('color.400')};
  background-color: ${themeGet('color.white')};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${themeGet('color.300')};
    color: ${themeGet('color.white')}
  }
`;
