import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  margin: 8px 0px;
  padding: 16px;
  align-items: center;
`;
const Shorten = styled.span`
  color: ${(props) => props.theme.colors.primaryCyan};
`;
const Link = styled.span`
  color: hsl(257, 27%, 26%);
  padding-left: 8px;
`;

const CopyButton = styled.button`
  color: white;
  width: 120px;
  padding: 16px;
  margin-left: 8px;
  font-weight: ${(props) => props.theme.typography.primaryBold};
  border-radius: 5px;
  border: 0px;
  background-color: ${(props) => props.isCopy ? "hsl(257, 27%, 26%)" : props.theme.colors.primaryCyan};
  &:hover {
    background-color: #74e2e2;
  }
`;

const ShortenLink = (props) => {
  const { link, short } = props;
  const [isCopy, setIsCopy] = React.useState(false);
  return (
    <Container>
      <Link>{link}</Link>
      <section>
        <Shorten>{short}</Shorten>
        <CopyButton
          isCopy={isCopy}
          onClick={() => {
            setIsCopy(true);
            navigator.clipboard.writeText(link);
          }}
        >
          {isCopy ? "Copied" : "Copy"}
        </CopyButton >
      </section>
    </Container>
  );
};

export default ShortenLink;
