import React from "react";
import styled from "@emotion/styled";
import CardDetail from "./CardDetail";
import ContainerLine from "./Line";



const Container = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutralLightGray};
`;

const ContentContainer = styled.section`
  width: 100%;
  border: 1px solid black;
    display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({theme}) => theme.grid.desktop.maxWidth };
`


const Title = styled.h1`width: 300px;
text-align: center;`;

const Description = styled.p`
  width: 100%;
  max-width: 500px;
  padding: 0px 32px;
  text-align: center;
  color: ${(props) => props.theme.colors.neutralGrayishViolet};
`;


const CardDetailInformation = [{
  logo: "/static/icon-brand-recognition.svg",
  title: "Brand Recognition",
  description: "Boost your brand recognition with each click. Generic links don't mean a thing  branded links help instill confidence in your content."
},
{
  logo: "/static/icon-brand-recognition.svg",
  title: "Brand Recognition",
  description: "Boost your brand recognition with each click. Generic links don't mean a thing  branded links help instill confidence in your content."
},
{
  logo: "/static/icon-brand-recognition.svg",
  title: "Brand Recognition",
  description: "Boost your brand recognition with each click. Generic links don't mean a thing  branded links help instill confidence in your content."
}]

const AdvancedStatistics = () => {
  return (
    <Container>
      <ContentContainer>
      <Title>Advanced Statistics</Title>
      <Description>
        track how your links are performing across the web with our advanced
        statistics dashboard.
      </Description>

      <ContainerLine>
        {CardDetailInformation.map((elem, index)=> <CardDetail
          {...elem} index={index}
        /> )}
      </ContainerLine>
    </ContentContainer>
    </Container>
  );
};

export default AdvancedStatistics;
