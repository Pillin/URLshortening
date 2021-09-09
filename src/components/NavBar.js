import React, { useState } from "react";
import styled from "@emotion/styled";
import * as faSolid from 'emotion-icons/fa-solid/'

import { CyanButton } from "./core/Button";

const NavContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: ${({theme}) => theme.grid.desktop.maxWidth };
  justify-content: center;
  padding: 0px 16px;
`;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-self: center;
  height: 50px;
  margin: 32px 0px;

  display: ${(props) => (props.displayMobile ? "flex" : "none")};
  flex-wrap: wrap;
  @media (min-width: 769px) {
    width: 1170px;
    display: ${(props) => (props.displayMobile ? "none" : "flex")};
  }
`;

const Logo = styled.img`

`;
const NavBarLink = styled.nav`
  padding: 0px 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutralGrayishViolet};

  &:hover {
    color: ${(props) => props.theme.colors.neutralVeryDarkBlue};
  }
`;
const LoginButton = styled.button`
  background: transparent;
  border: 0px;
  padding: 0px 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutralGrayishViolet};
  &:hover {
    color: ${(props) => props.theme.colors.neutralVeryDarkBlue};
  }
`;
const FirstContent = styled.section`
  display: flex;
  min-width: 20px;
`;

const BuggerContainer = styled.section`
  position: relative;
  padding: 24px;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100%);
  z-index: 5;
  gap: 16px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.primaryDarkViolet};
`;

const HR = styled.hr`
  width: 100%;
  border-style: solid;
  border-color: gray;
  border-width: 0px 0px 1px 0px;
`;


const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer>
      <Container displayMobile={false}>
        <FirstContent>
          <Logo src="/static/logo.svg" />
          <NavBarLink>Features</NavBarLink>
          <NavBarLink>Pricing</NavBarLink>
          <NavBarLink>Resources</NavBarLink>
        </FirstContent>
        <FirstContent>
          <LoginButton>Login</LoginButton>
          <CyanButton width="100px">Register</CyanButton>
        </FirstContent>
      </Container>
      <Container displayMobile={true}>
        <FirstContent>
          <Logo src="/static/logo.svg" />
        </FirstContent>
        <FirstContent>
          <faSolid.AlignJustify onClick={() => setOpen(!open)} css="color: gray"/>
        </FirstContent>
        {open && (
          <BuggerContainer>
            <NavBarLink>Features</NavBarLink>
            <NavBarLink>Pricing</NavBarLink>
            <NavBarLink>Resources</NavBarLink>
            <HR />
            <LoginButton>Login</LoginButton>
            <CyanButton width="100px">Sign Up</CyanButton>
          </BuggerContainer>
        )}
      </Container>
    </NavContainer>
  );
};

export default NavBar;
