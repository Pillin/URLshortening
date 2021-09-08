import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Line = styled.section`
  background-color: cyan;
  height: calc(100% - 300px);
  width: 5px;
  position: absolute;
  z-index: 4;
  bottom: 100px;

  @media (min-width: 769px) {
    width: calc(100% - 300px);
    height: 5px;
    bottom: auto;
  }
`;

const ContainerLine = (props) => (
  <Container>
    <Line />
    {props.children}
  </Container>
);

export default ContainerLine;
