import React from "react";
import styled from "@emotion/styled";
import CardDetail from "./CardDetail";
import ContainerLine from "./Line";

import BrandRecognition from "../../public/static/icon-brand-recognition.svg";

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutralLightGray};
`;

const Title = styled.h1``;

const Description = styled.p`
  width: 100%;
  padding: 0px 32px;
  text-align: center;
  color: ${(props) => props.theme.colors.neutralGrayishViolet};
`;

const AdvancedStatistics = () => {
  return (
    <Container>
      <Title>Advanced Statistics</Title>
      <Description>
        track how your links are performing across the web with our advanced
        statistics dashboard.
      </Description>

      <ContainerLine>
        <CardDetail
          logo={<BrandRecognition />}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing  branded links help instill confidence in your content."
        />
        <CardDetail
          logo={<BrandRecognition />}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing  branded links help instill confidence in your content."
        />
        <CardDetail
          logo={<BrandRecognition />}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing  branded links help instill confidence in your content."
        />
      </ContainerLine>
    </Container>
  );
};

export default AdvancedStatistics;
