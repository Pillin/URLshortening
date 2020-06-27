import React from "react";
import styled from "@emotion/styled";
import LinkList from "./LinkList";
import SocialMedia from "./SocialMedia";

const Container = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex: row;
  background-color: ${(props) => props.theme.colors.neutralVeryDarkViolet};
`;
const Logo = styled.img`
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
        title=""
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
