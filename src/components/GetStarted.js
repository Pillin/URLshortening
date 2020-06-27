import React from "react";
import styled from "@emotion/styled";

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
const CyanButton = styled.button`
  color: white;
  width: 200px;
  padding: 16px;
  font-weight: ${(props) => props.theme.typography.primaryBold};
  border-radius: 20px;
  border: 0px;
  background-color: ${(props) => props.theme.colors.primaryCyan};
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
