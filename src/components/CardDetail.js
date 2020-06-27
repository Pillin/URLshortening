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
  margin: 48px 16px;
`;

const Logo = styled.section`
  position: absolute;
  top: 0px;
`;

const Title = styled.h2``;

const Description = styled.p`
  color: ${(props) => props.theme.colors.neutralGrayishViolet};
`;

const CardDetail = (props) => {
  const { icon, title, description } = props;

  return (
    <Container>
      <Logo>{icon}</Logo>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default CardDetail;
