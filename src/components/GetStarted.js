import React from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

const Container = styled.section`
  width: 100%;
  padding: 32px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.primaryDarkViolet};
  background-image: url("/static/bg-boost-desktop.svg");
`;

const Title = styled.h1`
  color: white;
`;

const GetStarted = () => {
  return (
    <Container>
      <Title>Boost your links today</Title>
      <CyanButton>Get Started</CyanButton>
    </Container>
  );
};

export default GetStarted;
