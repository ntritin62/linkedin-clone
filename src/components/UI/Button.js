import React from 'react';
import { styled } from 'styled-components';

const Button = ({ onClick, children, ...restProps }) => {
  return (
    <Container onClick={onClick} {...restProps}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid #000;
  img {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;
export default Button;
