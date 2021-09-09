import React from "react";
import styled from "@emotion/styled";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram
} from "emotion-icons/fa-brands";

const Container = styled.section`
  height: 20px;
  margin: 1.5em 0em;
  display: flex;
  flex-direction: row;
  width: 200px;
  > svg {
    color: white;
    height: 20px;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Facebook />
      <Twitter />
      <Pinterest />
      <Instagram />
    </Container>
  );
};

export default NavBar;
