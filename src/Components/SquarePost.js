import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, CommentFull } from "./Icons";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: white;
  }
  opacity: 0;
  transition: opacity 0.3s linear;
`;

const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
  cursor: pointer;
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  color: white;
  &:first-child {
    margin-right: 20px;
  }
`;

const NumberText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const SqaurePost = ({ likeCount, commentCount, file }) => (
  <Container bg={file.url}>
    <Overlay>
      <Number>
        <HeartFull />
        <NumberText>{likeCount}</NumberText>
      </Number>
      <Number>
        <CommentFull />
        <NumberText>{commentCount}</NumberText>
      </Number>
    </Overlay>
  </Container>
);

SqaurePost.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.string.isRequired
};

export default SqaurePost;
