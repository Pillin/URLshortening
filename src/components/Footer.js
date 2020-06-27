import React from "react";
import styled from "@emotion/styled";
import LinkList from "./LinkList";
import SocialMedia from "./SocialMedia";

const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutralVeryDarkViolet};

  @media (min-width: 679px) {
    flex-direction: row;
    align-items: flex-start;
    height: 240px;
  }
`;
const Logo = styled.img`
  margin: 1.5em 0em;
  width: 100px;
  height: 30px;
  color: white;
`;
const Footer = () => {
  return (
    <Container>
      <Logo src="/static/logo.svg" />
      <LinkList
        title="Features"
        list={[
          { label: "Link Shortening", url: "/" },
          { label: "Branded Links", url: "/" },
          { label: "Analytics", url: "/" }
        ]}
      />
      <LinkList
        title="Resources"
        list={[
          { label: "Blog", url: "/" },
          { label: "Developers", url: "/" },
          { label: "Support", url: "/" }
        ]}
      />
      <LinkList
        title="Company"
        list={[
          { label: "About", url: "/" },
          { label: "Our Team", url: "/" },
          { label: "Careers", url: "/" },
          { label: "Contact", url: "/" }
        ]}
      />
      <SocialMedia />
    </Container>
  );
};

export default Footer;
