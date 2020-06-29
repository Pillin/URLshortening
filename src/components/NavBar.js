import React from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 32px 0px;
`;

const Logo = styled.section``;
const NavBarLink = styled.nav``;
const LoginButton = styled.button`
  background: transparent;
  border: 0px;
`;

const NavBar = () => {
  return (
    <Container>
      <Logo />
      <NavBarLink>Features</NavBarLink>
      <NavBarLink>Pricing</NavBarLink>
      <NavBarLink>Resources</NavBarLink>
      <LoginButton>Login</LoginButton>
      <CyanButton width="100px">Register</CyanButton>
    </Container>
  );
};

export default NavBar;
