import React from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 32px 0px;
`;

const Container = styled.section`
  width: 100%;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 679px) {
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
  @media (min-width: 679px) {
    width: 680px;
    padding: 0px;
    align-items: flex-start;
  }
`;
const Title = styled.h1`
  font-size: 62px;
  margin: 0px;
`;
const Description = styled.section`
  font-size: 20px;
  margin-bottom: 32px;
`;

const Img = styled.img`
  width: 90%;
  @media (min-width: 769px) {
    margin-right: -100px;
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
