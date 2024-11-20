import React, { useState } from "react";
import styled from "styled-components";
import themeGet from "../../utils/themeGet";

const CommentInputWithSubmit = ({ onSubmit, author }) => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment, author); // 댓글과 작성자 정보 전달
      setComment(""); // 댓글 입력창 초기화
    }
  };

  return (
    <CommentInput>
      <Input
        placeholder="댓글을 작성하세요"
        value={comment}
        onChange={handleChange}
      />
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </CommentInput>
  );
};

export default CommentInputWithSubmit;

const CommentInput = styled.div`
  width: 47vw;
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding-left: 20px;
  border: 2px solid ${themeGet("color.200")};
  border-radius: 0.5rem;
  font-size: ${themeGet("fonts.body2.size")};
  width: 660px;
  height: 60px;

  &:focus {
    outline: none;
    border: 2px solid ${themeGet("color.main")};
    color: ${themeGet("color.400")};
    transition: border 0.3s ;
  }
`;

const SubmitButton = styled.button`
  background-color: ${themeGet("color.main")};
  color: ${themeGet("color.white")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${themeGet("fonts.body1.size")};
  width: 75px;
  height: 64px;
`;
