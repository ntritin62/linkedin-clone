import React from 'react';
import { styled } from 'styled-components';
import Button from './UI/Button';

const LoginForm = (props) => {
  return (
    <Container>
      <Button onClick={props.onClick} type="button">
        <img src="/images/google.svg" alt="" />
        <span>Sign in with Google</span>
      </Button>
    </Container>
  );
};

const Container = styled.form`
  margin-bottom: 16px;

  Button:first-of-type:hover {
    background-color: #004182;
    margin: 8px 0;
  }

  a {
    display: inline-block;
    margin: 24px 0 16px;
    text-decoration: none;
    color: #0a66c2;
    font-weight: 600;
    font-size: 16px;
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  input {
    height: 23px;
    margin-top: 12px;
    padding: 14px 16px;
    border-radius: 4px;
    border: 1px solid #000;
  }
  label {
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.75);
  }
`;
const Break = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0 24px;
  p {
    font-size: 14px;
    padding: 0 16px;
  }

  &:before {
    content: '';
    position: relative;
    height: 1px;
    width: 100%;
    background-color: rgb(0 0 0 / 0.35);
  }
  &:after {
    content: '';
    position: relative;
    height: 1px;
    width: 100%;
    background-color: rgb(0 0 0 / 0.35);
  }
`;
export default LoginForm;
