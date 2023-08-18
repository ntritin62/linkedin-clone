import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import Button from './UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signInAPI } from '../actions/userActions';
import { Redirect } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  return (
    <Container>
      {user && <Redirect to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <Navbar>
          <a href="#!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 20 17"
              focusable="false"
              class="lazy-loaded"
              aria-busy="false"
            >
              <path
                d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z"
                fill="currentColor"
                fill-opacity=".9"
              ></path>
            </svg>
            <span>Articles</span>
          </a>

          <a href="#!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              focusable="false"
              class="lazy-loaded"
              aria-busy="false"
            >
              <path
                d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>People</span>
          </a>

          <a href="#!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              focusable="false"
              class="lazy-loaded"
              aria-busy="false"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
                fill="currentColor"
                fill-opacity=".25"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
                fill="currentColor"
                fill-opacity=".6"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Learning</span>
          </a>

          <a href="#!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              focusable="false"
              class="lazy-loaded"
              aria-busy="false"
            >
              <path
                d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Jobs</span>
          </a>
        </Navbar>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <HeroLeft>
            <HeroTitle>Welcome to your professional community</HeroTitle>
            <Form>
              <LoginForm
                onClick={(event) => {
                  console.log(1);
                  event.preventDefault();
                  dispatch(signInAPI());
                }}
              />
              {/* <Button>New to Linkedin? Join now</Button> */}
            </Form>
          </HeroLeft>
          <HeroPicture src="/images/login-hero.svg" alt="" />
        </Hero>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    /* padding: 0 5px; */
  }
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  gap: 50px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  padding-right: 24px;
  a {
    text-decoration: none;
    color: rgb(102 102 102);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Join = styled.a`
  font-size: 16px;
  min-height: 48px;
  padding: 12px 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 999px;
  font-weight: 600;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  min-height: 48px;
  padding: 12px 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 40px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: initial;
    width: 95%;
    margin: 0 auto;
  }
`;

const HeroLeft = styled.div`
  width: 55%;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroPicture = styled.img`
  width: 700px;
  height: 560px;
  flex-shrink: 1;

  @media (max-width: 768px) {
    width: 100%;
    position: initial;
    margin-top: 50px;
    height: 100%;
    flex-shrink: initial;
  }
`;
const HeroTitle = styled.h1`
  font-size: 56px;
  color: #8f5849;
  font-weight: 200;
  line-height: 70px;
  @media (max-width: 768px) {
    line-height: 1.4;
    font-size: 32px;
    font-weight: 300;
    width: 90%;
  }
`;

const Form = styled.div`
  width: 408px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Login;
