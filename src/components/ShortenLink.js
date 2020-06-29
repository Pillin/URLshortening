import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  display: flex;
  background-color: white;
  border-radius: 10px;
`;
const Shorten = styled.span``;
const Link = styled.span``;

const CopyButton = styled.button``;

const ShortenLink = (props) => {
  const { link, short } = props;
  return (
    <Container>
      <Link>{link}</Link>
      <Shorten>{short}</Shorten>
      <CopyButton />
    </Container>
  );
};

export default ShortenLink;
