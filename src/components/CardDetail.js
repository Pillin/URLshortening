import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: cennter;
  max-width: 300px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  padding: 24px;
 margin: 24px;

  @media (min-width: 769px) {
   margin: ${({number}) => `${number*50}px 16px 48px 16px`};
  }
`;

const LogoContainer = styled.section`
position: absolute;
    top: -30px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
   background-color: ${(props) => props.theme.colors.primaryDarkViolet};
  border-radius: 50%;
      width: 60px;
    height: 60px;
`

const Logo = styled.img`
    position: relative;
    width: 30px;
    height: 30px;
`;

const Title = styled.h2``;

const Description = styled.p`
  color: ${(props) => props.theme.colors.neutralGrayishViolet};
`;

const CardDetail = (props) => {
  const { logo, title, description, index } = props;
console.log({logo})
  return (
    <Container number={index}>
      <LogoContainer><Logo src={logo} /></LogoContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default CardDetail;
