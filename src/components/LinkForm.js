import React from "react";
import styled from "@emotion/styled";
import { CyanButton } from "./core/Button";

import Input from "./core/Input";

const Container = styled.section`
  width: 100%;
  max-width: ${({theme}) => theme.grid.desktop.maxWidth };
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FormContainer = styled.section`
  width: 100%;
  max-width: 1170px;
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.primaryDarkViolet};
  background-image: url("/static/bg-boost-desktop.svg");
  > button {
    width: 100%;
    margin-top: 16px;
  }
  @media (min-width: 769px) {
    flex-direction: row;

     > button {
      width: 200px;
      margin-top: 0px;

    }
  }
`;

const LinkForm = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const inputData = {error, value, setValue};
  const handleClick = () => {
    setError(!value);
  }
  return (
    <Container>
      <FormContainer>
        <Input {...inputData} />
        <CyanButton onClick={handleClick}>Shorten it!</CyanButton>
      </FormContainer>
    </Container>
  );
};

export default LinkForm;
