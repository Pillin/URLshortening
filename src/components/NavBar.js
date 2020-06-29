import React from "react";
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

  width: 1170px;
  align-self: center;
  height: 50px;
  margin: 32px 0px;
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

const NavBar = () => {
  return (
    <NavContainer>
      <Container>
        <FirstContent>
          <Logo src="/static/logo.svg" />
          <NavBarLink>Features</NavBarLink>
          <NavBarLink>Pricing</NavBarLink>
          <NavBarLink>Resources</NavBarLink>{" "}
        </FirstContent>
        <FirstContent>
          <LoginButton>Login</LoginButton>
          <CyanButton width="100px">Register</CyanButton>
        </FirstContent>
      </Container>
    </NavContainer>
  );
};

export default NavBar;
