import React from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

import Input from "./core/Input";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FormContainer = styled.section`
  width: 100%;
  max-width: 1170px;
  padding: 32px 32px;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.primaryDarkViolet};
  background-image: url("/static/bg-boost-desktop.svg");
`;

const LinkForm = () => {
  return (
    <Container>
      <FormContainer>
        <Input />
        <CyanButton>Shorten it!</CyanButton>
      </FormContainer>
    </Container>
  );
};

export default LinkForm;
