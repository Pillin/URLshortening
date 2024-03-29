import React from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  width: 100%;
  z-index: 1;
  
  max-width: ${({theme}) => theme.grid.desktop.maxWidth };
`;

const Container = styled.section`
  width: 100%;
  max-width: 1170px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
  }
`;
const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  @media (min-width: 769px) {
    max-width: 680px;
    min-width: 250px;
    padding: 0px;
    align-items: flex-start;
  }
`;
const Title = styled.h1`
  font-size: 36px;
  margin: 0px;

  @media (min-width: 769px) {
   font-size: 62px;
  }
`;
const Description = styled.section`
  font-size: 20px;
  margin-bottom: 32px;
`;

const Img = styled.img`
  width: 70%;
  @media (min-width: 769px) {
    margin-right: -100px;
    width: 80%;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Container>
        <Content>
          <Title>More than just shorter links</Title>
          <Description>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </Description>
          <CyanButton>Get Started</CyanButton>
        </Content>
        <Img src="/static/illustration-working.svg" />{" "}
      </Container>
    </BannerContainer>
  );
};

export default Banner;
