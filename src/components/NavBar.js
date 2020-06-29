import React, { useState } from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

const NavContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
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
  @media (min-width: 679px) {
    width: 1170px;
    display: ${(props) => (props.displayMobile ? "none" : "flex")};
  }
`;

const Logo = styled.img`
  padding: 0px 16px;
`;
const NavBarLink = styled.nav`
  padding: 0px 16px;
  color: ${(props) => props.theme.colors.neutralGrayishViolet};
`;
const LoginButton = styled.button`
  background: transparent;
  border: 0px;
  padding: 0px 16px;
  color: ${(props) => props.theme.colors.neutralGrayishViolet};
`;
const FirstContent = styled.section`
  display: flex;
`;

const BuggerContainer = styled.section`
  padding: 24px;
  top: 100px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0px 24px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.neutralVeryDarkBlue};
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
          <button onClick={() => setOpen(!open)}>---</button>
        </FirstContent>
        {open && (
          <BuggerContainer>
            <NavBarLink>Features</NavBarLink>
            <NavBarLink>Pricing</NavBarLink>
            <NavBarLink>Resources</NavBarLink>
            <LoginButton>Login</LoginButton>
            <CyanButton width="100px">Register</CyanButton>
          </BuggerContainer>
        )}
      </Container>
    </NavContainer>
  );
};

export default NavBar;
