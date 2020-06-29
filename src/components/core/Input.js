import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  margin-right: 16px;
  width: 100%;
`;

const Error = styled.span`
  color: red;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 1px solid red;
  border-radius: 10px;
`;

const InputField = () => {
  return (
    <Container>
      <Input placeholder="Shorten a link here" />
      <Error>Please add a link</Error>
    </Container>
  );
};

export default InputField;
