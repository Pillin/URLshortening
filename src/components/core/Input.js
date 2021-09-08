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
  border: ${({error}) => `1px solid ${error? 'red' : "black" }`};
  border-radius: 10px;
`;

const InputField = (props) => {
  const {error, value, setValue }= props 
  return (
    <Container>
      <Input value={value} onChange={e=> setValue(e.target.value)} placeholder="Shorten a link here" />
      <Error>{error && "Please add a link"}</Error>
    </Container>
  );
};

export default InputField;
