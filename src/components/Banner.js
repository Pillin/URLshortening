import React from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Content = styled.section`
  width: 680px;
`;
const Title = styled.h1``;
const Description = styled.section``;

const Img = styled.img``;

const Banner = () => {
  return (
    <Container>
      <Content>
        <Title>More than just shorter links</Title>
        <Description>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </Description>
        <CyanButton>Get Started</CyanButton>
      </Content>
      <Img />
    </Container>
  );
};

export default Banner;
