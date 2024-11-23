import React from "react";
import styled from "styled-components";
import GoToModalButton from "../PT/GoToModalButton";
import themeGet from "../../utils/themeGet";

const CommentItem = ({ name, text, onEdit, onDelete }) => {
  return (
    <Comment>
      <AurthorContainer>
        <CommentAuthor>{name}</CommentAuthor>
        <GoToModalButton color="#000000" size={24} onEdit={onEdit} onDelete={onDelete} />
      </AurthorContainer>
      <CommentText>{text}</CommentText>
    </Comment>
  );
};

export default CommentItem;

const Comment = styled.div`
  border-bottom: 1px solid ${themeGet("color.200")};
  margin: 1rem 0;
`;

const AurthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const CommentAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: ${themeGet("fonts.body1.size")};
`;

const CommentText = styled.p`
  margin: 0.5rem 0;
  color: ${themeGet("color.400")};
  font-size: ${themeGet("fonts.body2.size")};
`;
